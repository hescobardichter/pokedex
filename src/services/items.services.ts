import axios from 'axios'; 
import { IData, IResult } from "../types/pokemon";

export const getItems = async () => {
    const list:any = await axios.get<IResult[]>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
    const data:IResult = list.data; 
    const results: any = data.results.map(async (result: IData, key: number) => {
        const res: any = await axios.get(result.url);
        const item: any = res.data;
        item.id = key;
        return item;
    });
    return await Promise.all(results);
}