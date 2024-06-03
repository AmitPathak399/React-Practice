import React, { useState, useEffect } from 'react';
import styles from '../Styles/SearchBar.module.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const apiKey = '6254b3aee9msh8cc346786026d33p1f9a4cjsn9830ee75dbf2';
    const host = 'edamam-food-and-grocery-database.p.rapidapi.com';
    const url = `https://${host}/auto-complete?q=${encodeURIComponent(query)}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': host,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.length > 0) {
        const formattedResults = data.map((item, index) => ({
          id: index,
          name: item,
        }));
        setResults(formattedResults);
        setError(null);
      } else {
        setError('No results found.');
        setResults([]);
      }
    } catch (error) {
      console.error(error);
      setError('Error fetching data.');
      setResults([]);
    }
  };

  const handleOnSearch = (string) => {
    setQuery(string);
    fetchData();
  };

  const handleOnSelect = (item) => {
    console.log('Selected item:', item);
    onSearch(item.name);
  };

  const formatResult = (item) => {
    return (
      <div className="result_wrapper">
        <span className="result_span">{item.name}</span>
      </div>
    );
  };

  return (
    <div className={styles.search_bar}>
      <ReactSearchAutocomplete
        items={results}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        placeholder="Search for recipes..."
        autoFocus
        value={query}
        onChange={setQuery}
        formatResult={formatResult}
      />
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default SearchBar;
