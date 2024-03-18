import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeHeader from './components/layout/HomeHeader';


const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName='home'
      screenOptions={{headerShown:false}}
      >
          <Drawer.Screen  name='home' component={HomeHeader} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

