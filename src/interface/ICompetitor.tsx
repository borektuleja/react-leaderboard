import { IOrderable } from "./IOrderable";

export interface ICompetitor extends IOrderable {
    Name: string;
    City: string;
    Score1: number;
    Score2: number;
    Rank1: number;
    Rank2: number;
}
