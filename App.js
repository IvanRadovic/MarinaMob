import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from "./src/Navigation/MainNavigation";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

export default function App() {

    const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <MainNavigation />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
