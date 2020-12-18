import React, { useCallback, useMemo, useContext } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import renderItemFunction from './useRenderItem'
import { contextTree } from '../store/index'

function App(props) {
  const { state, iconColor, fontColor } = useContext(contextTree)
  const forecasts = useMemo(() => {
    return (state && state.result && state.result.forecasts)
  }, [state])

  // 渲染 item 多增加一个参数
  const renderItem = useCallback(({ item }) => renderItemFunction({ item }, iconColor, fontColor), [state])
  const getKey = useCallback(getKeyFunciton, [state])


  return (
    <View style={[styles.list]}>
      <FlatList
        data={forecasts}
        renderItem={renderItem}
        keyExtractor={getKey}
      />
    </View>
  )

}

function getKeyFunciton(item) {
  return item.date
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    backgroundColor: 'transparent'
  }
})

export default App
