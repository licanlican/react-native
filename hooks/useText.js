import React from 'react';
import {Text} from 'react-native' // 展示文本

function App (props) {
  return (
    <Text {...props}>{props.children}</Text>
  )
}

export default App