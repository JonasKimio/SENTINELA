import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL =
  "https://app-sentinela-api-rm560475-htg5bnafe9akdadr.francecentral-01.azurewebsites.net";

export async function simularLeituraIoT(
  latitude: number,
  longitude: number
) {
  try {
    const token =
      await AsyncStorage.getItem("token");

    console.log("========== IOT ==========");
    console.log("TOKEN:");
    console.log(token);

    const payload = {
      latitude,
      longitude,

      temperatura:
        Math.floor(
          Math.random() * (45 - 30) + 30
        ),

      umidade:
        Math.floor(
          Math.random() * (40 - 10) + 10
        ),

      co2:
        Math.floor(
          Math.random() * (2000 - 1000) +
            1000
        ),

      fumaca:
        Math.floor(
          Math.random() * (100 - 60) + 60
        ),

      vento:
        Math.floor(
          Math.random() * (30 - 15) + 15
        ),

      chuva: 0,

      raioKm: 100,
    };

    console.log("PAYLOAD:");
    console.log(
      JSON.stringify(payload, null, 2)
    );

    const response = await fetch(
      `${API_URL}/api/iot/sensor`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            token
              ? `Bearer ${token}`
              : "",
        },

        body: JSON.stringify(payload),
      }
    );

    const text =
      await response.text();

    console.log("STATUS:");
    console.log(response.status);

    console.log("RESPONSE:");
    console.log(text);

    return response.ok;
  } catch (error) {
    console.log(
      "ERRO AO ENVIAR IOT:"
    );

    console.log(error);

    return false;
  }
}