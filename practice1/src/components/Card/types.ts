import { ReactChild, ReactNode } from "react";

export interface ICardProp {
    width?: string;
    height?: string;
    children?: ReactChild | ReactNode;
}