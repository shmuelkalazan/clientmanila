import { Iuser } from "./Iuser";

export const initialState :Iuser = {
    name: '', 
    personalNote: '',
    combatPreferences: {
      golani: 1,
      armor: 1,
      artillery: 1,
      searchAndRescue: 1,
    },
    supportPreferences: {
      targetingNCO: 1,
      nimrodiSergeant: 1,
      cook: 1,
      sandwichFiller: 1,
    },
    techPreferences: {
      fullstack: 1,
      data: 1,
      devops: 1,
      duty: 1,
    },
    submissionDate: new Date().toISOString(),
    status: 'draft',
    version: 1,
  }