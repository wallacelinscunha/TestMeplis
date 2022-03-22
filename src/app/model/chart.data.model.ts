import { PopulationData } from "./population.model";

export class ChartDataModel {

    public Years: Array<string>;
    public Population: Array<number>;

    private pupulationData: Array<PopulationData>;

    constructor(pupulationData: Array<PopulationData>) {
        this.Years = new Array<string>();
        this.Population = new Array<number>();
        this.pupulationData = pupulationData;
    }

    public buildData() {
        this.pupulationData.forEach((element: PopulationData) => {
            this.Years.push(element.Year);
            this.Population.push(element.Population);
        });
    }
}