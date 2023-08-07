import { RealmProvider } from "@realm/react";
import { Slot } from "expo-router";
import { schemas } from "@src/models";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function RootLayout() {
    const colorScheme = useColorScheme();
    console.log(colorScheme);

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <SafeAreaView style={styles.screen}>
                <RealmProvider schema={schemas}>
                    <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                        <Slot />
                    </ApplicationProvider>
                </RealmProvider>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
});