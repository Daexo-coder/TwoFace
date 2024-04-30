
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";



const Stack = createNativeStackNavigator ();


export default function App(){


return (
  <NavigationContainer >
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen  name="Login" component= {Login} />
      <Stack.Screen  name="Dashboard" component= {Dashboard} />
    </Stack.Navigator>

  </NavigationContainer>
);

}

