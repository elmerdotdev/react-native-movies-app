import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabScreen from "../screens/TabScreen";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator()

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Tabs'
        component={TabScreen}
        options={{
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#2c3e50'
          },
          headerTitleStyle: {
            color: '#fff'
          }
        }}
      />
      <Stack.Screen
        name='Show'
        component={ShowScreen}
        options={({ route }) => ({
          title: route.params.label
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppStack