import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Card, Divider } from 'react-native-elements'

const ForecastCard = ({ location, detail, time, temp }) => (
  <Card containerStyle={styles.card}>
    <Text style={styles.locationName}>{location}</Text>
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: `https://openweathermap.org/img/w/${detail.icon}.png` }}
      />
      <Text style={styles.time}>{time}</Text>
    </View>
    <Divider style={styles.divider} />
    <View style={styles.container}>
    <Text style={styles.notes}>{detail.description}</Text>
    <Text style={styles.notes}>{Math.round( temp * 10) / 10 }&#8451;</Text>
</View>
  </Card>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(56, 172, 236, 1)',
    borderWidth: 0,
    borderRadius: 20
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100
  },
  time: {
    color: 'white',
    fontSize: 38
  },
  divider: {
    backgroundColor: '#dfe6e9',
    marginVertical: 20
  },
  notes: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: 'white'
  }
})

export default ForecastCard
