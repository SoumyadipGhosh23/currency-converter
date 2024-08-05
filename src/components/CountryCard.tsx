import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function CountryCard({ setSelectedCountry, CountryList, selectedCountry }: CountryCardProps): JSX.Element {
  const renderItem = ({ item }: { item: Country }) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        item.name === selectedCountry && styles.selectedItem,
      ]}
      onPress={() => {
        if(selectedCountry == item.name) setSelectedCountry('')
        else setSelectedCountry(item.name)}}
    >
      <Image source={{ uri: item.flag }} style={styles.flagImage} />
      <Text style={styles.countryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
      data={CountryList}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      numColumns={2} // Render two items per row
      columnWrapperStyle={styles.row} // Apply styling to each row
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : '100%',
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    display : 'flex',
    width : '40%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    elevation: 2,
  },
  selectedItem: {
    backgroundColor: '#F6D449', // Highlight color for selected item
  },
  flagImage: {
    width: 50,
    height: 30,
  },
  countryName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign : 'center',
  },
  relationText: {
    fontSize: 16,
    color: '#666',
  },
});

export default CountryCard;
