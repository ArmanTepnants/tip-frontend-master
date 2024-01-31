import {countries} from "countries-list";

export const availableCountries = Object.entries(countries)
  .filter(data => data[1].continent === 'EU')
  .map(([key]) => key)
