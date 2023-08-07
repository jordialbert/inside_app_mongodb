import { RealmProvider } from "@realm/react";
import { Slot } from "expo-router";
import { schemas } from "@src/models";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "@src/styles/colors";

export default function RootLayout() {
    return (
        <SafeAreaView style={styles.screen}>
            <RealmProvider schema={schemas}>
                <Slot />
            </RealmProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.darkBlue,
    },
  });