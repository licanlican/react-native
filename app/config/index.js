import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export const SUNNY = '晴'
export const PART_SUNNY = '多云'
export const CLOUDY = '阴'

export const IMAGE_ACCORDING_TO_WEATER = new Map([
  [
    SUNNY,
    {
      poster: require('../assets/qingtian.jpg'),
      icon: (props) => <Ionicons name='ios-sunny-outline' size={48}  {...props} />,
      fontColor: '#000080',
      iconColor: "#000080"
    }
  ],
  [PART_SUNNY,
    {
      poster: require('../assets/yun.jpg'),
      icon: (props) => <Ionicons name='partly-sunny' size={48} {...props} />,
      fontColor: 'gray',
      iconColor: 'gray'
    }],
  [CLOUDY,
    {
      poster: require('../assets/yin.jpg'),
      icon: (props) => <Ionicons name='cloudy' size={48}  {...props} />,
      fontColor: '#B3EE3A',
      iconColor: '#B3EE3A'
    }]
])