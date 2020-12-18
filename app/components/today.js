import React, { useContext, useMemo } from 'react';
import { ImageBackground, SafeAreaView, View, StyleSheet, Text } from 'react-native'
import { contextTree } from '../store/index'
import { IMAGE_ACCORDING_TO_WEATER } from '../config/index'
function App(props) {
  const { width, bacground, state, iconColor } = useContext(contextTree)
  const data = useMemo(() => {
    return state && state.result
  }, [state])

  const id = useMemo(() => data && data.location.id, [data])
  const updateTime = useMemo(() => {
    const time = data && data.now.uptime
    if (time) {
      const year_ = time.slice(0, 4)
      const month_ = time.slice(4, 6)
      const day_ = time.slice(6, 8)
      const hour_ = time.slice(8, 10)
      const minute_ = time.slice(10, 12)
      const second_ = time.slice(12)
      return `${year_}/${month_}/${day_} - ${hour_} : ${minute_} : ${second_}`
    }
    return ''
  }, [data])
  const name = useMemo(() => data && data.location.name, [data])
  const text = useMemo(() => data && data.now.text, [data])
  const temperatureRange = useMemo(() => {
    const today_ = data && data.forecasts && data.forecasts[0]
    return today_ ? `${today_.high}°C ~ ${today_.low}°C` : '0'
  }, [data])
  const temp = useMemo(() => {
    return data && data.now.temp === 99999 ? '异常' : '无异常'
  }, [data])

  const feels_like = useMemo(() => data && data.now.feels_like, [data])
  const rh = useMemo(() => data && data.now.rh, [data])
  const wind = useMemo(() => {
    return data && (`${data.now.wind_dir} - ${data.now.wind_class}`)
  }, [data])



  function getIcon(text) {
    if (text) {
      return IMAGE_ACCORDING_TO_WEATER.get(text).icon
    }
    return () => { return (<View></View>) }
  }

  const Icon = useMemo(() => getIcon(text), [text])

  return (
    <SafeAreaView style={{ width, flex: 1 }}>
      <ImageBackground
        style={{
          width,
          flex: 1,
          justifyContent: 'space-around'
        }}
        source={bacground}>
        <View style={styles.panel}>
          <Text style={styles.text}>当前城市 : {name}</Text>
          <Icon color={iconColor} />
          <Text style={styles.text}>{temperatureRange}</Text>
        </View>


        <View style={styles.panel}>
          <Text style={styles.text}>当前城市 ID(唯一表示): {id}</Text>
          <Text style={styles.text}>更新时间 : {updateTime}</Text>
          <Text style={styles.text}>异常值 : {temp}</Text>
        </View>


        <View style={styles.panel}>
          <Text style={styles.text}>当日天气 : {text}</Text>
          <Text style={styles.text}>体感温度 : {feels_like}</Text>
          <Text style={styles.text}>相对湿度 : {rh}</Text>
          <Text style={styles.text}>风力 : {wind}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  panel: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    margin: 10,
    fontSize: 18
  }
})

export default App;