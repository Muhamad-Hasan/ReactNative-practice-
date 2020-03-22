/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './Home';
//import List from './List';
//import Inputs from './Inputs';
//import Calculator from './Calculator';
//import Scrollview from './Scrollview';
//import ImagesExamples  from './ImagesExamples';
//import Button  from './Button';
//import Calculator from './Calculator';

///import Home from './Todo/Home.js';
//import main from './Todo/main.js';
//import Login from './Assets/screens/Login';
//import Profile from './Assets/screens/Profile';
import PackageBooking from './Assets/screens/PackageBooking';


AppRegistry.registerComponent(appName, () =>PackageBooking);
