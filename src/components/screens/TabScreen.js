import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MoviesContainer from '../containers/MoviesContainer';
import SearchContainer from '../containers/SearchContainer';
import TvContainer from '../containers/TvContainer';

const Tab = createMaterialTopTabNavigator();

const TabScreen = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { textTransform: 'none' },
    }}
  >
    <Tab.Screen name="Movies" component={MoviesContainer} />
    <Tab.Screen name="Search Results" component={SearchContainer} />
    <Tab.Screen name="TV Shows" component={TvContainer} />
  </Tab.Navigator>
)

export default TabScreen