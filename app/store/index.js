import React, { useState, useEffect, createContext } from 'react';
import { useDimensions } from '@react-native-community/hooks'
import fetchData from '../components/fetchData'
import { IMAGE_ACCORDING_TO_WEATER } from '../config/index'
export const contextTree = createContext({})
function Store(props) {
  // 屏幕宽度
  const { width } = useDimensions().screen
  // 天气数据总览
  let [state, setState] = useState(null)
  // 背景图片
  let [bacground, setBacground] = useState(null)
  // icon 颜色-背景图片的深浅会影响 icon 的展示
  let [iconColor, seticonColor] = useState(null)
  // 字体颜色 - 理由同上
  let [fontColor, setfontColor] = useState(null)

  useEffect(() => {
    fetchData(res => {
      setState(res)
      setBacground(
        IMAGE_ACCORDING_TO_WEATER.get(res.result.now.text).poster)
      seticonColor(
        IMAGE_ACCORDING_TO_WEATER.get(res.result.now.text).iconColor)
      setfontColor(
        IMAGE_ACCORDING_TO_WEATER.get(res.result.now.text).fontColor
      )

    })
  }, [])

  const store = { width, state, bacground, iconColor, fontColor }


  return (
    <contextTree.Provider value={store}>
      {props.children}
    </contextTree.Provider>
  );
}


export default Store