import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { map } from 'rxjs/operators'
import { PopulationData } from "src/app/model/population.model";

@Injectable()
export class TesteJsService {

    constructor(
        private httpService: HttpService) { }

    public getData() {
        return this.httpService
        .get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .pipe(
            map(response =>
                response.data && response.data.length ? response.data.map((element: any) => {
                    return <PopulationData> {
                        Nation: element.Nation, 
                        Population: element.Population, 
                        Year: element.Year
                    };
                }) : { name: "No results" }
            )
        );
    }

}