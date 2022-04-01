export interface IResult{
    count: number;
    next: string;
    previous: any;
    result: IData[]
}

export interface IData{
    id: string;
    name: string;
    url: string;
}