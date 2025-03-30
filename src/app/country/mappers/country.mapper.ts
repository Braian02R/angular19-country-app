import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest.countries.interface";

export class CountryMapper {

    // static RestCountry => Country
    static mapRestCountryItemToCountry( item: RESTCountry ):Country {
        return {
            cca2: item.cca2,
            flag: item.flag,
            flagSvg: item.flags.svg,
            //name: item.translations["spa"]?.official || item.name.common,
            name: item.translations["spa"].official ?? 'No Spanish Name',
            capital: item.capital,
            population: item.population, 

            region: item.region,
            subRegion: item.subregion,
        }
    }

    // static RestCountry[] => Country[] 
    static mapRestCountryItemsToCountryArray ( items: RESTCountry[]): Country[] {
        return items.map( item => this.mapRestCountryItemToCountry(item))
    }
}