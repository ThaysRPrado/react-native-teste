import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';

const AppNavigator = createStackNavigator({
  Home: { 
    screen: Home,
  },
  Login: { 
    screen: Login,
  },
},{
  headerMode:'none',
  initialRouteName: 'Login'
});

export default AppNavigator;