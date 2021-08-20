import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onChangeTerm, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />

      <TextInput
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onSubmit}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginVertical: 15,
  },
});

export default SearchBar;
