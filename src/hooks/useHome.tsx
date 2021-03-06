import React, {useEffect, useState} from 'react';
import {getItems} from '../services/items.services';

export const useHome = () => {
  const [allPokemons, setAllPokemons] = useState<Array<any>>([]);
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [search, setSearch] = useState('');
  const [isNext, setIsNext] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadPokemons = () => {
    setLoading(true);
    getItems(isNext, setIsNext)
      .then((res: any) => {
        setLoading(false);
        setPokemons([...pokemons, ...res]);
        setAllPokemons([...pokemons, ...res]);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    loadPokemons();
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
    isNext,
    loadPokemons,
    loading,
  };
};
