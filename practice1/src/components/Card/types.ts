import { ReactChild, ReactNode } from "react";

export enum CardVariant {
outlined='outlined',
primary='primary',
}

export interface ICardProp {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: ReactChild | ReactNode;
    onClick: (num: number) => void;
}