import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme , Text} from 'react-native';
import { Header } from '../components/Authorization/headerAuth';
import Colors from '../../constants/Colors';
import TabBarHistory from '../assets/svg/TabBarHistory'
import TabBarSearch from '../assets/svg/TabBarSearch'
import TabBarAnalysis from '../assets/svg/TabBarAnalysis'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="analysisTab"
        
        options={{
          title: 'Анализы',
          header: () => <Header />,
          tabBarIcon: ({ color }) => <TabBarAnalysis  color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="searchTab"
        options={{
          title: 'Найти',
          header: () => <Header />,
          tabBarIcon: ({ color }) => <TabBarHistory color={color} />,

        }}
      />
      <Tabs.Screen
        name="historyTab"
        options={{
          title: 'История',
          header: () => <Header />,
          tabBarIcon: ({ color }) => <TabBarSearch color={color} />,
        }}
      />
      
      

    </Tabs>
  );
}
