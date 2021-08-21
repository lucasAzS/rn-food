import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>

      <ResultsList
        title='Const Effective'
        results={filterResultsByPrice('$')}
      />
      <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} />
      <ResultsList title='Big Spender' results={filterResultsByPrice('$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
