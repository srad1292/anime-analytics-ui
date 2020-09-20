import { BarYTicks } from './bar-y-ticks.interface';

export interface IBarGraphData {

    labels: string[];
    values: number[];
    colors: string[];
    dataLabel: string;
    yTicks?: BarYTicks;
}