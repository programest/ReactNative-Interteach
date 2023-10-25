import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme , Text} from 'react-native';
import { Header } from '../components/header/Header';
import Colors from '../../constants/Colors';
import TabBarAccount from '../assets/svg/TabBarAccount'
import TabBarClinics from '../assets/svg/TabBarClinics'

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
        name="index"
        
        options={{
          title: 'Главная',
          header: () => <Header />,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="clinicsTab"
        options={{
          title: 'Клиники',
          header: () => <Header />,
          tabBarIcon: ({ color }) => <TabBarClinics color={color} />,
        }}
      />
       <Tabs.Screen
        name="cabinetTab"
        options={{
          title: 'Войти',
          header: () => <Header />,
          tabBarIcon: ({ color }) => <TabBarAccount color={color} />,

        }}
        
      />
   
    
      

    </Tabs>
  );
}
