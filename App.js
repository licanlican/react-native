import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SafeAreaView from './hooks/useSafeArear'
import Text from './hooks/useText'
import Image from './hooks/useImage'
import TouchableOpacity from './hooks/useTouchableOpacity'
import Button from './hooks/useButton'
import { StyleSheet, View, Alert } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
export default function App() {
  // useDimensions 可以获取设备的宽度和高度

  // 可以获取设备是横向的还是纵向的
  const { landscape } = useDeviceOrientation()
  const handleClick = () => console.log('click')
  return (
    <SafeAreaView style={styles.container}>
      <Text
        onPress={handleClick}>HI  React Native</Text>
      <Text
        numberOfLines={1}>HI  React NativeHI  React NativeHI  React NativeHI  React NativeHI  React NativeHI  React NativeHI  React NativeHI  React NativeHI  React Native</Text>
      <Image
        source={require('./assets/favicon.png')} style={styles.image} />
      <StatusBar style="auto" />

      <TouchableOpacity onPress={() => console.log('press')}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300', width: 300, height: !landscape ? 300 : '100%' }} />
      </TouchableOpacity>


      <Button
        color="white"
        title="click me to alert"
        onPress={() => Alert.alert('myTitle', 'button is clicked', [
          { text: '确定', onPress: () => console.log('Yes') },
          { text: '再想想' },
          { text: '取消' }
        ])} />
      <Button
        color="white"
        title="click me to prompt"
        onPress={() => Alert.prompt('myTitle', 'my message', text => console.log('text', text))} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {

  }
});
