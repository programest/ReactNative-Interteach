import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, FlatList, Text , StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Location from '../../assets/svg/Location'
import Arrow from '../../assets/svg/Arrow';
import InputArrow from '../../assets/svg/InputArrow';
const SearchComponent = ({ data, visible, setVisible, loading } : any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState('Алматы');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('Найдите вашего врача');

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    const sad = 'Ничего не нашлось'
    {filtered.length > 0 ? setFilteredData(filtered) : setFilteredData(sad)}

  };
  type Option = {
    label: string;
    value: string;
  };
  const [isOpen, setIsOpen] = useState(false)
  const options: Option[] = [
    { value: "Option 1", label: "Алматы" },
    { value: "Option 2", label: "Астана" },
    { value: "Option 3", label: "Атырау" },
    { value: "Option 4", label: "Актобе" },
    { value: "Option 5", label: "Актау" },
    { value: "Option 6", label: "Аксай" },
    { value: "Option 7", label: "Кызылорда" },
    { value: "Option 8", label: "Шымкент" },
    { value: "Option 9", label: "Уральск" },
    { value: "Option 10", label: "Кульсары" },
  ];
  const toggleRotation = () => {
    const toValue = isOpen ? 0 : 1;
   
    Animated.timing(rotationValue, {
      toValue,
      duration: 300, // Длительность анимации в миллисекундах
      easing: Easing.linear, // Функция интерполяции для анимации
      useNativeDriver: false, // Устанавливаем в false, так как используем CSS-свойство transform
    }).start();
  
    setIsOpen(!isOpen);
  };
  const handleListItemPress = (item) => {
    setVisible(false)
    setSearchQuery(item)
    setPlaceholderText(item);
    setIsFocused(false);
  };
  const handleCityPress = (item : string) => {
    setSelectedValue(item)
    setIsOpen(false)
    toggleRotation()
    
  }
 
  useEffect(() => {
    {loading ?  setPlaceholderText('Загрука...') : setPlaceholderText(placeholderText)}

  }, [loading])
  const rotationValue = useRef(new Animated.Value(0)).current;
  return (
    <View style={{marginBottom: 20}}>
        
                <View  style={styles.textInputSearch}>
                    
                    <TextInput
                        placeholder={placeholderText}
                        value={searchQuery}
                        style={styles.textInput}
                        onChangeText={handleSearch}
                        onFocus={() => setVisible(true)}
                    />
                   {loading  && <ActivityIndicator style={{position: 'absolute', right: 120}} size='small' color="#08367B" />}
                    <View style={{flexDirection: 'column',  position: 'relative', zIndex: 1000, borderRadius: 10 }}>
                            
                            <TouchableWithoutFeedback style={{ }} onPress={toggleRotation}>
                                
                            <View style={[{flexDirection: 'row', justifyContent: 'space-around',  alignItems: 'center', zIndex: 100    } , isOpen && {}]}>
                            <Location />
                                <Text style={{}}>{selectedValue}</Text>
                        
                                <Animated.View
                                style={{
                                    
                                transform: [
                                    {
                                    rotate: rotationValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '180deg'], // Укажите начальный и конечный угол вращения
                                    }),
                                    },
                                ],
                                }}
                            >
                                <InputArrow height={8}  />
                            </Animated.View>

                            </View>
                            </TouchableWithoutFeedback>
                            {isOpen && (
                            
                                <View style={{marginTop: 10, width: '120%',padding: 5,  backgroundColor: '#E8E8E8', position: 'absolute', top: 30, left: -10, borderRadius: 10}}>
                                    {options.map((option, index) => (
                                        <View style={{ padding: 5, }} key={index}>
                                            <TouchableOpacity onPress={()=>handleCityPress(option.label)}>
                                                <Text style={{fontSize: 15}} key={index}>{option.label}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                
                                </View>
                            )}
                    </View >
                    
                </View>
              
                {visible ? (
                        <View style={styles.container}>
                            {loading && (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size='large' color="#08367B" />
                            </View>
                            )}
                            <FlatList
                            data={filteredData}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.flatList}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                style={styles.filterList}
                                onFocus={() => setIsFocused(true)}
                                onPress={() => handleListItemPress(item)}
                                onBlur={() => setIsFocused(false)}
                                >
                                <Text>{item}</Text>
                                <View style={{ marginRight: 5 }}>
                                    <Arrow width="20" height="15"></Arrow>
                                </View>
                                </TouchableOpacity>
                            )}
                            />
                        </View>
                        ) : null}

                
            
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      loadingContainer: {
        position: 'absolute',
        left: 0,
        top: 20,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999, // Вы можете настроить значение zIndex, чтобы управлять слоем загрузки
      },
      flatList: {
        position: 'absolute',
        top: 20,
        padding: 10,
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        zIndex: 100,
      },
    textInputSearch: {
        padding: 8,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderColor: '#4D4D4D',
        borderWidth: 1,
        height: 40,
        borderRadius: 10,
        zIndex: 1000,
        width: '100%',
        
    },
    filterList: {
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '100%',
        height: 30,

        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    
    focusedFilterList: {
        backgroundColor: 'blue', // Измените цвет при фокусе
      },
    textInput: {
      
        borderRightWidth: 2,
        width: '70%',

    }
})
export default SearchComponent