import * as React from 'react';
import ExampleComponent from './component';
import {connect} from 'react-redux';
import {AppState} from './redux/reducers';
import {toggleType} from './redux/actions/componentActions';

const mapStateToProps = (state: AppState) => {
    return state
}

interface AppProps extends AppState{
    toggleType: any,
}

class App extends React.Component<AppProps,AppState>{
    constructor(props: AppProps) {
        super(props);
    }

    render(){
        return (
            <div>
                <ExampleComponent tipo={this.props.example.tipo} />
                <button onClick={this.props.toggleType}>Change type popo</button>
            </div>
            
        );
    };
}

export const AppContainer= connect(mapStateToProps, {toggleType})(App);