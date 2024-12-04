export interface Preferences {
    golani: number;
    armor: number;
    artillery: number;
    searchAndRescue: number;
}

export interface SupportPreferences {
    targetingNCO: number;
    nimrodiSergeant: number;
    cook: number;
    sandwichFiller: number;
}

export interface TechPreferences {
    fullstack: number;
    data: number;
    devops: number;
    duty: number;
}

export interface Iuser {
    name: string;
    personalNote: string;
    combatPreferences: Preferences;
    supportPreferences: SupportPreferences;
    techPreferences: TechPreferences;
    submissionDate: string; 
    status: "draft" | "submitted" | "approved"; 
    version: number;
}
  