import {IListColumn} from "./typings";
import {CSSProperties} from "react";

export const getGridColumnsStyle = (columns: IListColumn[]): CSSProperties => {
    const styleValues = columns.map(({ minWidth}) => {
        if (typeof minWidth === "string") {
            return minWidth
        }
        return `${minWidth || 1}fr`
    }).join(' ')

    return ({ gridTemplateColumns: styleValues })
}