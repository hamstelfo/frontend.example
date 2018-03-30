import actionTypes from '../actions/actionTypes';

export class ExampleComponentState{
    tipo: number;

    constructor(){
        this.tipo= 0;
    }
}

export const exampleComponentReducer= (state: ExampleComponentState = new ExampleComponentState(), action) => {
    switch (action.type){
        case actionTypes.TOGGLE_TYPE:
            return (<any>Object).assign({}, state, {
                tipo: action.payload(state.tipo),
            });

        default:
            return (<any>Object).assign({},state, {});
    }
}