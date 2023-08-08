import { Layout, Text } from '@ui-kitten/components';
import { Drawer } from 'expo-router/drawer';

export default function TicketsPage() {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Drawer.Screen
                options={{
                    title: "Tickets",
                    headerShown: true
                }}
            />
            <Text>Tickets Screen</Text>
        </Layout>
    );
}
