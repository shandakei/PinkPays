import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ReceivePaymentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Payment QR Code</Text>
      <Image
        source={{ uri: 'https://as1.ftcdn.net/jpg/05/94/36/64/1000_F_594366491_I3vaOX6ZasBJsZNfuNErXASCcpcsQ1Co.jpg' }}
        style={styles.qrCode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrCode: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 16,
  },
});
