import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import ForecastCard from './components/ForecastCard'

class App extends Component {

  state = {
    latitude: 0,
    longitude: 0,
    forecast: [],
    error: null
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(prevState => {
        const { latitude, longitude } = position.coords
        return {
          latitude, longitude
        }
      }, () => this.getWeather())
    }, err => {
      this.setState({ forecast: err.message })
    }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })
  }

  getWeather() {
    const { longitude, latitude } = this.state
    const URL = `https://samples.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b6907d289e10d714a6e88b30761fae22`

    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({ forecast: res })
      })
  }

  renderItem = ({ item }) => {
    const { forecast } = this.state

    return (
      <ForecastCard
        detail={item}
        location={forecast.name}
      />
    )
  }

  componentDidMount() {
    this.getLocation()
  }

  render () {
    const { forecast } = this.state
    const keyExtractor = (item, index) => index.toString()

    return (
      <FlatList
        data={forecast.weather}
        extraData={this.state}
        style={{ marginTop: 20 }}
        keyExtractor={keyExtractor}
        renderItem={this.renderItem}
      />
    )
  }

}

export default App
