import * as React from 'react';
import { hot } from 'react-hot-loader';

interface Props extends React.Props<{}> {
    tipo: number;
}

const ExampleComponent: React.StatelessComponent<Props> = (props) => {

    const content= (props.tipo===1)?"popo1":"pipi-otro";

    return (
        <div className={`example-comp`}>{content}</div>
    );
};

//export default exampleComponent;
export default hot(module)(ExampleComponent);