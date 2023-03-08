import { ICompetitor } from "../interface/ICompetitor";
import { IRepository } from "../interface/IRepository";

export class CompetitorMockRepository implements IRepository<ICompetitor> {
    public getRecords(): ICompetitor[] {
        return [
            {ID: 1, Name: "Abc Cde", City: "Ostrava", Score1: 50, Rank1: 1, Score2: 80, Rank2: 4},
            {ID: 2, Name: "Rts Qwy", City: "Opava", Score1: 30, Rank1: 5, Score2: 110, Rank2: 2},
            {ID: 3, Name: "Zxc Cvb", City: "Ostrava", Score1: 40, Rank1: 3, Score2: 120, Rank2: 1},
            {ID: 4, Name: "Asd Fgh", City: "Olomouc", Score1: 45, Rank1: 2, Score2: 100, Rank2: 3},
            {ID: 5, Name: "Uio Pkl", City: "Opava", Score1: 35, Rank1: 4, Score2: 60, Rank2: 5},
        ];
    }
}
