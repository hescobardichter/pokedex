import React, {useEffect, useState} from 'react';
import {getItems} from '../services/items.services';

export const useHome = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getItems()
      .then((res: any) => {
        const data = res.data.results.map((item: any) => {
          return item;
        });
        setPokemons(data);
        setAllPokemons(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const onFilter = (value: string) => {
    if (search !== '') {
      const filter = allPokemons.filter((p: any) =>
        p.name.toLowerCase().includes(value.toLowerCase()),
      );
      setPokemons(filter);
    } else {
      setPokemons(allPokemons);
    }
  };

  const onKeyPress = (e: any) => {
    onFilter(search);
  };

  return {
    pokemons,
    search,
    setSearch,
    onFilter,
    onKeyPress,
  };
};
