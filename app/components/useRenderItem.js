import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { IMAGE_ACCORDING_TO_WEATER } from '../config/index'

function renderItemFunction({ item }, iconColor, fontColor) {
  const Icon = IMAGE_ACCORDING_TO_WEATER.get(item.text_day).icon
  const styleObj = [
    {
      color: fontColor,
    },
    styles.title
  ]
  return (
    <View style={styles.container} key={item.date}>
      <View style={styles.leftContainer}>
        <Icon color={iconColor} />
        <Text style={styleObj}>{item.week}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styleObj}>日期： {item.date}</Text>
        <Text style={styleObj}>天气：{item.text_day}</Text>
        <Text style={styleObj}>最高温度：{item.high}</Text>
        <Text style={styleObj}>最低温度：{item.low}</Text>
        <Text style={styleObj}>日间风力：{item.wc_day}</Text>
        <Text style={styleObj}>晚间风力：{item.wc_night}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,

  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightContainer: {
    flex: 2
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left'
  },
  image: {
    width: 50,
    height: 50
  }
})

export default renderItemFunction