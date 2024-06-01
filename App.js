import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaViewr } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Categories from './Components/Categories';
import SearchBar from './Components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <Header />
      <Categories />
      <SearchBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
