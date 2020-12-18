import React from 'react';
import Provider from './app/store/index'
import TabBar from './app/components/tabBar'


function App(props) {
  return (
    <Provider>
      <TabBar />
    </Provider>
  );
}

export default App;