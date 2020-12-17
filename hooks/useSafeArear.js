import React from 'react';
import {SafeAreaView} from 'react-native' // 将组件展示到安全，可见的区域

function App (props) {
  return (
    <SafeAreaView {...props}>{props.children}</SafeAreaView>
  )
}

export default App