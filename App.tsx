import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
// custom
import { Color } from "./app/constants";
import store from "./app/store/store";
import List from "./app/screens/list";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar />
        <List />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
  },
});
