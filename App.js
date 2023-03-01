import Header from "./components/Header";
import  Add_page from "./screens/add_page";
import All_notes from "./screens/all_page"
import Home from "./screens/home"
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const stack=createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Header />
          <stack.Navigator>
            <stack.Screen name="home" component={Home} />
              <stack.Screen name="add_page" component={Add_page} />
              <stack.Screen name="all-page" component={All_notes} />

          </stack.Navigator>
      </NavigationContainer>
);
}