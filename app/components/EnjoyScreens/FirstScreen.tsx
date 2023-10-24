import { Text, View} from "../../../constants/Themed";
import { StyleSheet, Image, SafeAreaView, FlatList } from "react-native";

export default function FirstScreen() {
    const data = [
        { key: 'item1', text: 'Собственная сеть медицинского ассистента' },
        { key: 'item2', text: '34 года на рынке' },
        { key: 'item3', text: '30 клиник по всему Казахстану ' },
        { key: 'item4', text: '3000 сотрудников ' },
      ];
   
      function highlightNumbers(text : string) {
        const regex = /\d+/g;
        const matches = text.match(regex);
    
        if (matches) {
          const parts = text.split(regex);
    
          return parts.map((part, index) => {
            if (matches[index]) {
              return (
                <Text key={index} style={[styles.enjoyRed, {fontSize: 20}]}>
                  {matches[index]}
                </Text>
              );
            } else {
              return part;
            }
          });
        }
    
        return text;
      }

      function ListItem({ item }: { item: string }) {
        return (
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 7, marginBottom: 7, }}>
            <View style={styles.enjoyListCircle}></View>
            <Text style={styles.enjoyItem}>{highlightNumbers(item.text)}</Text>
          </View>
        );
      }
      return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={styles.enjoyTitle}>Мы заботимся о самом ценном!</Text>
          <Image source={require('../../assets/images/enjoy1.png')} />
          <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
            <Text style={[styles.enjoySubTitle, styles.enjoyRed]}>INTERTEACH</Text>
            <Text style={styles.enjoySubTitleIn}>Это:</Text>
          </View>
          <FlatList data={data} renderItem={({ item }) => <ListItem item={item} />} />
        </SafeAreaView>
      );
    
}

const styles = StyleSheet.create({
    enjoyRed: {
      
        fontWeight: '700',
        color: '#FF0000', // Устанавливаем цвет текста в красный
      },
      enjoyTitle: {
        fontSize: 30, 
        fontWeight: '600',
         marginBottom: 30
      },
      enjoySubTitle: {
        fontSize: 35, 
        fontWeight: '700',
        marginBottom: 3
      },
      enjoySubTitleIn: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 30
      },
      enjoyItem: {
        fontSize: 17,
        fontWeight: '500',
        flexWrap: 'wrap'
      },
      enjoyListCircle: {
        marginRight: 10,
        backgroundColor: '#00A1E4',
        width: 10,
        height: 10,
        borderRadius: 40
      }
  })