import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import PacienteScreen from "./src/screens/PacienteScreen";
import colors from "./src/theme/colors";
import HeaderButton from "./src/components/buttons/HeaderButton";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import createPacienteScreen from "./src/screens/CreatePacienteScreen";
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/config/firebase";
import CreatePacienteScreen from "./src/screens/CreatePacienteScreen";

const AuthenticatedUserContext = createContext({});
const RootStack = createNativeStackNavigator();

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

const AuthStack = () => (
  <RootStack.Navigator defaultScreenOptions={LoginScreen}>
    <RootStack.Group
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.secondary,
        },
      }}
    >
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Signup" component={SignUpScreen} />
    </RootStack.Group>
  </RootStack.Navigator>
);
const UserStack = () => (
  <RootStack.Navigator defaultScreenOptions={HomeScreen}>
    <RootStack.Group
      screenOptions={{
        headerTintColor: "white",
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <HeaderButton />,
        }}
      />
      <RootStack.Screen name="Paciente" component={PacienteScreen} />
      <RootStack.Screen name="CrearPaciente" component={CreatePacienteScreen} />
    </RootStack.Group>
  </RootStack.Navigator>
);

const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setLoading(false);
      console.log(user);
    });
    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
