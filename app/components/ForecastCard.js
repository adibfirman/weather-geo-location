import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Card, Divider } from 'react-native-elements'

const ForecastCard = ({ location }) => (
  <Card containerStyle={styles.card}>
    <Text style={styles.locationName}>{location}</Text>
  </Card>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(56, 172, 236, 1)',
    borderWidth: 0,
    borderRadius: 20
  },
  locationName: {
    fontSize: 16,
    color: 'white',
    textTransform:'capitalize'
  }
})

export default ForecastCard
