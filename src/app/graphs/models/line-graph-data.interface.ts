import { BarYTicks } from './bar-y-ticks.interface';

export interface ILineGraphData {

    labels: string[];
    values: number[];
    dataLabel: string;
    yTicks?: BarYTicks;
}