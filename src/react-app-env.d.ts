/// <reference types="react-scripts" />
interface ICountry {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
}
