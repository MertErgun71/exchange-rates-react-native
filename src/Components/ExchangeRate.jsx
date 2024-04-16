import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ExchangeRate({ isim, alis, satis, degisim, flag }) {
  return (
    <View
      style={{
        display: "flex",
        width: "90%",
        backgroundColor: "#A79277",
        padding: 10,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={flag}
          style={{ width: 30, height: 30, borderRadius: 100, marginRight: 5 }}
        />
        <Text style={{ color: "#EAD8C0", fontSize: 30 }}>{isim}</Text>
      </View>
      <View>
        <Text style={styles.text}>Alış Değeri: {alis}</Text>
        <Text style={styles.text}>Satış Değeri: {satis}</Text>
        <Text style={styles.text}>Değişim: {degisim}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "right",
    color: "#EAD8C0",
    fontSize: 18,
  },
});
