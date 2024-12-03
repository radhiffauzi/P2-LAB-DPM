import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PERCOBAAN PERTAMA PEMBUATAN DASAR PEMROGRAMAN MOBILE</Text>
      <Text style={styles.text}>DWI YUDA</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light-gray', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal (bold)
    marginBottom: 20, // Spasi bawah untuk memisahkan teks dari kotak
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%', // Lebar relatif terhadap layar
  },
  box1: {
    backgroundColor: 'grey', // Warna kotak 1 (bebas, diatur ke abu abu)
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'black', // Warna kotak 2 (bebas, diatur ke black)
    width: 100,
    height: 100,
  },
});