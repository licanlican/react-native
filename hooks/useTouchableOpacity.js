import React from 'react';
import { TouchableOpacity } from 'react-native' // 触摸

function App(props) {
  return (
    <TouchableOpacity {...props} >{props.children}</TouchableOpacity>
  )
}

export default App