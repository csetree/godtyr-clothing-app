import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider, Text } from "native-base";
import HomeScreen from "./src/screen/HomeScreen";



export default function App() {
  return (
  <NativeBaseProvider>
    <box flex={1} bg={#fff} alignitems={center} justifyContent={center}>
      <Text>Welcome, Bro.</Text>
    </box>
  </NativeBaseProvider>
  );
}


