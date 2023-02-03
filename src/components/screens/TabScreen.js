import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MoviesContainer from '../containers/MoviesContainer';
import SearchContainer from '../containers/SearchContainer';
import TvContainer from '../containers/TvContainer';

const Tab = createMaterialTopTabNavigator();

const TabScreen = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { textTransform: 'none' },
      tabBarIndicatorStyle: { backgroundColor: '#2c3e50' }
    }}
  >
    <Tab.Screen name="Movies" component={MoviesContainer} navigation={navigation} />
    <Tab.Screen name="Search Results" component={SearchContainer} navigation={navigation} />
    <Tab.Screen name="TV Shows" component={TvContainer} navigation={navigation} />
  </Tab.Navigator>
)

export default TabScreen