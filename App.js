import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Toast from "react-native-toast-message";

import MainNavigation from "./src/Navigation/MainNavigation";
import { toastConfig } from "./src/Hooks/toastMessage";

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

export default function App() {

    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <MainNavigation />
        <Toast config={toastConfig}/>
    </QueryClientProvider>
  );
}
