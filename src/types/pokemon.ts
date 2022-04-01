export interface IResult{
    count: number;
    next: string;
    previous: any;
    results: IData[]
}

export interface IData{
    name: string;
    url: string;
}