/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ListPart from './ListPart';
import Navigation from './navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
