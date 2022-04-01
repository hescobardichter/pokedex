import React, {useEffect, useState} from 'react';

export const usePokemon = (params: any) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setPokemon(params.pokemon);
  }, [params]);

  return {pokemon};
};
