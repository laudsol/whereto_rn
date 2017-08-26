import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './components/HomePage.js';
import CheckIn from './components/CheckIn.js';


const App = StackNavigator({
  Home: {screen : CheckIn}
});

export default App;
