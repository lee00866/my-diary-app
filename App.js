import { NavigationContainer } from "@react-navigation/native";
import Realm from "realm";
import Navigator from "./navigator";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { DBContext } from "./context";

SplashScreen.preventAutoHideAsync();

const FeelingSchema = {
  name: "Feeling",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null);

  useEffect(() => {
    const prepare = async () => {
      try {
        const connection = await Realm.open({
          path: "diaryDB",
          schema: [FeelingSchema],
        });
        //Init code can be here
        setRealm(connection);
      } catch (e) {
        console.error(e);
      } finally {
        setReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <DBContext.Provider value={realm}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </DBContext.Provider>
  );
}
