import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from "../redux/actions/counterActions";

function CounterApp(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => props.increaseCounter()}>
          <Text style={{ fontSize: 20 }}>Increase</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{props.counter}</Text>
        <TouchableOpacity onPress={() => props.decreaseCounter()}>
          <Text style={{ fontSize: 20 }}>Decrease</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
  },
});

export default connect(
  actions.mapStateToProps,
  actions.mapDispatchToProps
)(CounterApp);
