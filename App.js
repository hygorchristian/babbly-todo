import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Application from './src/Application';

function App() {
  const [loaded, setLoaded] = useState(false);

  const init = async () => {
    await Font.loadAsync({
      Poppins: require('./assets/fonts/Poppins-Medium.ttf'),
      PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
      PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
      PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
      PoppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    });

    setLoaded(true)
  }

  useEffect(() => {
    init()
  }, [])

  return loaded && <Application />;

}

export default App;
