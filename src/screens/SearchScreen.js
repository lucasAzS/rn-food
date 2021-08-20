import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = React.useState('');
  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onSubmit={() => console.log('Search submitted')}
      />

      <Text>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
