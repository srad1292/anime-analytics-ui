import { MalItem } from "./mal-item"

export interface AnimeRelated {
    
    adaptation: MalItem[];
    alternativeSetting: MalItem[];
    alternativeVersion: MalItem[];
    character: MalItem[];
    other: MalItem[];
    parentStory: MalItem[];
    prequel: MalItem[];
    sequel: MalItem[];
    sideStory: MalItem[];
    spinOff: MalItem[];
    summary: MalItem[];

}