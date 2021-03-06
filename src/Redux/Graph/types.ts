// Action Type
export const ADDCOUNTRY = "GRAPH/ADDCOUNTRY" as const;
export const DELCOUNTRY = "GRAPH/DELCOUNTRY" as const;
export const DELETE_UPDATE = "GRAPH/UPDATE" as const;
export const LOAD = "GRAPH/LOAD" as const;
export const SELECTCOUNTRY = "GRAPH/SELECTCOUNTRY" as const;
export const SELECT_UPDATE = "GRAPH/SELECT_UPDATE" as const;
export const SUCCESS_LOAD = "GRAPH/SUCCESS_LOAD" as const;

// State
export interface GraphState {
  selectedCountryName: string;
  selectedCountryData: GraphModel[];
  countries: { [countryName: string]: GraphModel[]};
  isLoading: boolean;
}

export type GraphModel = {
  Age: string,
  Country: string,
  Population: number,
  Year: number,
  docId: string,
}

export type UserDataType = {
  id: string,
  countries: string[]
}