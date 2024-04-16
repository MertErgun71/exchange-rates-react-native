import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExchangeRate from "./src/Components/ExchangeRate";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://finans.truncgil.com/today.json");
      const jsonData = await response.json();

      const birimler = [
        "EUR",
        "USD",
        "GBP",
        "RUB",
        "JPY",
        "SAR",
        "ILS",
        "MXN",
        "CNY",
        "KRW",
      ];

      const newData = birimler.map((birim) => ({
        code: birim,
        alis: jsonData[birim]["Alış"],
        satis: jsonData[birim]["Satış"],
        degisim: jsonData[birim]["Değişim"],
      }));

      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const flagImages = {
    EUR: require("./assets/Images/EU.png"),
    USD: require("./assets/Images/USA.png"),
    GBP: require("./assets/Images/UK.png"),
    RUB: require("./assets/Images/RU.png"),
    JPY: require("./assets/Images/JP.png"),
    SAR: require("./assets/Images/SAR.png"),
    ILS: require("./assets/Images/IL.png"),
    MXN: require("./assets/Images/MX.png"),
    CNY: require("./assets/Images/CHN.png"),
    KRW: require("./assets/Images/SK.png"),
  };

  const renderItem = ({ item }) => (
    <View style={{ width: "100%", alignItems: "center", marginVertical: 10 }}>
      <ExchangeRate
        flag={flagImages[item.code]}
        isim={item.code}
        alis={item.alis}
        satis={item.satis}
        degisim={item.degisim}
      />
    </View>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF2E1", alignItems: "center" }}
    >
      <View>
        <Text style={{ fontSize: 30, color: "#A79277", fontWeight: "bold" }}>
          WoreX Finance
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        style={{ width: "100%" }}
      />
    </SafeAreaView>
  );
};

export default App;
