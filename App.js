import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {InnerNavigationDrawer} from './src/screens';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <InnerNavigationDrawer initialTabName={'Home'}/>
      </NavigationContainer>
  );
}
