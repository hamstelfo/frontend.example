import * as React from 'react';
import { mount, configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
const Adapter = require("enzyme-adapter-react-16");
import ExampleComponent from './component';
import * as actions from './redux/actions/componentActions';
import {reducers} from './redux/reducers';
import * as actionTypes from './redux/actions/actionTypes';
import {ExampleComponentState} from './redux/reducers/componentReducer';


//console.log(configure);
//console.log(ExampleComponent);

configure({ adapter: new Adapter() });


test('El componente de prueba renderiza el texto correcto "popo1" cuando el tipo es = 1', () => {
    const tipo= 1;
    const wrapper = mount(
        <ExampleComponent tipo={tipo} />
    );

    const ec= wrapper.find("div");

    expect(ec.text()).toBe('popo1');
});

describe('example reducer', () => {
    it ('debería devolver el estado inicial', () => {
        expect(reducers({example:new ExampleComponentState()}, actions.toggleType())).toEqual(
            {
                example: {
                    tipo: 1
                },
            },
        );
    });
});

/*
describe('actions', () =>{
    it('debería togglear el tipo en el estado principal', () => {

    });
});*/