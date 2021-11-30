import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../login';
import Regform from '../Regform';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Regform: {
        screen: Regform,
        navigationOptions: {
            header: null
        }
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);