import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });

      setResults(res.data.businesses);
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
