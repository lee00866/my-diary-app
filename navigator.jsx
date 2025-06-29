import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import Write from "./screen/Write";

const Tabs = createNativeStackNavigator();

const Navigator = () => (
  <Tabs.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Write" component={Write} />
  </Tabs.Navigator>
);

export default Navigator;
