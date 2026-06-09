import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#D32F2F",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Fire Alert" }}
      />

      <Stack.Screen
        name="login"
        options={{ title: "Login" }}
      />

      <Stack.Screen
        name="cadastro"
        options={{ title: "Cadastro" }}
      />

      <Stack.Screen
        name="mapa"
        options={{ title: "Mapa de Alertas" }}
      />

      <Stack.Screen
        name="perfil"
        options={{ title: "Perfil" }}
      />

      <Stack.Screen
        name="configuracoes"
        options={{ title: "Configurações" }}
      />

      <Stack.Screen
        name="regioes"
        options={{ title: "Regiões" }}
      />

      <Stack.Screen
        name="nova-regiao"
        options={{ title: "Nova Região" }}
      />
    </Stack>
  );
}