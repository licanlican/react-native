import React from 'react';
import { Image } from 'react-native' // 展示图片  对于本地图片 require 传入路径。对于网络图片，传入对象- width height,网络图片 require 并不知道其宽高

function App(props) {
  return (
    <Image {...props} />
  )
}

export default App