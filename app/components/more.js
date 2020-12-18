import React, { useContext } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native'
import { contextTree } from '../store/index'
import UseFlatList from './useFlatList'

function App(props) {
  const { width, bacground } = useContext(contextTree)
  return (
    <SafeAreaView style={{ width, flex: 1 }}>
      <ImageBackground
        style={{
          width,
          flex: 1
        }}
        source={bacground}>
        <UseFlatList />
      </ImageBackground>
    </SafeAreaView>
  );
}


export default App;