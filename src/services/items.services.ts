import axios from 'axios'; 
import { IResult } from "../types/pokemon";
import {v4 as uuidv4} from 'uuid';

export const getItems = async () => {
    return axios.get<IResult[]>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100");
}