import {CounterActionType, ICounterAction} from './action';

export interface IState{
    count:number
}

export const initialState:IState = {
    count:0
}

const appReducer = (state:IState,action:ICounterAction) => {
    // const returnState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case CounterActionType.PLUS:
            return {
                ///...returnState,
                ...state,
                count: state.count + 1
            }
        case CounterActionType.MINUS:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;

    }
}
export default appReducer;
