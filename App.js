import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tugas DPM Pertemuan 2</Text>

      {/* Dua kotak horizontal */}
      <View style={styles.rowContainer}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Kotak 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>kotak 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Mengatur elemen di tengah secara vertikal
    alignItems: 'center', // Mengatur elemen di tengah secara horizontal
    backgroundColor: '#DCDCDC', // Warna abu-abu terang
  },
  title: {
    fontSize: 24, // Ukuran font judul
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak antara judul dan kotak
  },
  rowContainer: {
    flexDirection: 'row', // Membuat layout horizontal
    justifyContent: 'space-between', // Jarak sama antar kotak
    width: '60%', // Lebar area kotak 
  },
  box1: {
    width: 100, // Lebar kotak 1z
    height: 100, // Tinggi kotak 1
    backgroundColor: '#CDDC39', // Warna untuk kotak 1
    justifyContent: 'center', // Menempatkan teks di tengah vertikal
    alignItems: 'center', // Menempatkan teks di tengah horizontal
    borderRadius: 10, // Membuat sudut melengkung
  },
  box2: {
    width: 100, // Lebar kotak 2
    height: 100, // Tinggi kotak 2
    backgroundColor: '#009688', // Warna untuk kotak 2
    justifyContent: 'center', // Menempatkan teks di tengah vertikal
    alignItems: 'center', // Menempatkan teks di tengah horizontal
    borderRadius: 10, // Membuat sudut melengkung
  },
  boxText: {
    color: '#FFFFFF', // Warna teks di dalam kotak
    fontWeight: 'bold', // Gaya teks tebal
    fontSize: 16, // Ukuran teks
  },
});

export default FlexBoxLayout;
