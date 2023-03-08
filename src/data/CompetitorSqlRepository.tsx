import { ICompetitor } from "../interface/ICompetitor";
import { IRepository } from "../interface/IRepository";

export class CompetitorSqlRepository implements IRepository<ICompetitor> {
    public getRecords(): ICompetitor[] {
        return []; // TODO fetch database
    }
}
