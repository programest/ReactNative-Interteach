import React, { useState } from 'react';
import { View, TextInput, FlatList, Text , StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Location from '../../assets/svg/Location'
import Arrow from '../../assets/svg/Arrow';
const SearchComponent = ({ data } : any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState('Алматы');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('Найдите вашего врача');

  const [filteredData, setFilteredData] = useState(data);
  const [visible, setVisible] = useState(false)
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
  
  const handleListItemPress = (item) => {
    console.log(item)
    setPlaceholderText(item);
    setIsFocused(false);
  };
  return (
    <View style={{marginBottom: 20}}>
      <View  style={styles.textInputSearch}>
        <TextInput
            placeholder={placeholderText}
            value={searchQuery}
            style={styles.textInput}
            onChangeText={handleSearch}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
        />
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Location />
       <Picker
       style={{width: 150}}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {options.map((option) => (
          <Picker.Item key={option.value} label={option.label} style={{fontSize: 12}} value={option.value} />
        ))}
      </Picker>

        </View>
       

      </View>
      {visible ? (
        <FlatList
        data={filteredData}
        
        keyExtractor={(item, index) => index.toString()}
        style={{height: 250}}
        renderItem={({ item }) => 

            <TouchableOpacity style={[styles.filterList]}   onFocus={() => { setIsFocused(true)}}  onPress={() => handleListItemPress(item)}  onBlur={() => { setIsFocused(false)}} >
                <View style={styles.filterItem} >
                    <Text style={{}}>{item}</Text>
                    <View style={{marginRight: 5}}>
                        <Arrow width="20" height="15"></Arrow>
                    </View>
                </View>
            </TouchableOpacity>
        }
        />
      ) : <></>}
    </View>
  );
};
const styles = StyleSheet.create({
    textInputSearch: {
        padding: 8,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderColor: '#4D4D4D',
        borderWidth: 1,
        height: 40,
        borderRadius: 10,
        width: '100%',
        
    },
    filterList: {
        borderBottomWidth: 1,
        marginTop: 20,
        width: '100%',
        height: 22
    },
    filterItem: {
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