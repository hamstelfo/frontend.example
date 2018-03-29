import * as React from 'react';
import {ExampleComponent} from './component';

class App extends React.Component<{},{}>{
    render(){
        return (
            <ExampleComponent tipo={1} />
        );
    };
}