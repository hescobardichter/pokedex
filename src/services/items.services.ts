import axios from 'axios'; 
import { IData, IResult } from "../types/pokemon";

export const getItems = async (isNext:any, setIsNext: any) => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
    const list:any = await axios.get<IResult[]>(isNext || url);
    const data:IResult = list.data; 
    setIsNext(data.next);
    const results: any = data.results.map(async (result: IData, key: number) => {
        const res: any = await axios.get(result.url);
        return res.data;
    });
    return await Promise.all(results);
}