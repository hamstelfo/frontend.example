import * as React from 'react';
import { mount, Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ExampleComponent} from './component';

Enzyme.configure({ adapter: new Adapter() });

console.log(ExampleComponent);

test('El componente de prueba renderiza el texto correcto "popo1" cuando el tipo es = 1', () => {
    const tipo= 1;
    const wrapper = mount(
        <ExampleComponent tipo={tipo} />
    );

    const ec= wrapper.find("div");

    expect(ec.text()).toBe('popo1');
});
