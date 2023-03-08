import { Table } from "./components/Table";
import { CompetitorMockRepository } from "./data/CompetitorMockRepository";
import { ICompetitor } from "./interface/ICompetitor";
import { IRepository } from "./interface/IRepository";
import { ISortingService } from "./interface/ISortingService";
import { SortingService } from "./services/SortingService";

export function App(): JSX.Element {
	// Create a new competitor repository
	const repository: IRepository<ICompetitor> = new CompetitorMockRepository();

	// Create a new competitor sorting service internally used by the table
	const sortingService: ISortingService<ICompetitor> = new SortingService<ICompetitor>();

	// Render the component
	return (
		<Table<ICompetitor> repository={repository} sortingService={sortingService} columns={[
			{key: "ID", header: "ID"},
			{key: "Name", header: "Jméno"},
			{key: "City", header: "Colliery"},
			{key: "Score1", header: "Výkon WOD1 [kg]"},
			{key: "Rank1", header: "Umístění WOD1"},
			{key: "Score2", header: "Výkon WOD2 [kg]"},
			{key: "Rank2", header: "Umístění WOD2"}
		]}/>
	);
}
