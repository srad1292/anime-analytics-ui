import { AnimeAiredRange } from "./anime-aired-range";

export interface AnimeAired {
    
    from?: string;
    to?: string;
    prop: AnimeAiredRange;
    string?: string;
}