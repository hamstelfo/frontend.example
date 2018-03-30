import actionTypes from './actionTypes';

export const toggleType = () =>{
    const tipo= (t) => {
        return (t+1)%2;
    }

    return {
        type: actionTypes.TOGGLE_TYPE,
        payload: tipo,
    }
}