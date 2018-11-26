export enum CounterActionType {
    PLUS = "plus",
    MINUS = 'minus'
}

export interface ICounterAction {
    type:CounterActionType,
    id:number
}

export const plus = (id:number):ICounterAction => ({
    id,
    type:CounterActionType.PLUS
})

export const minus = (id:number):ICounterAction => ({
    id,
    type:CounterActionType.MINUS
})