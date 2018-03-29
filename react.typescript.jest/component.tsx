import * as React from 'react';

interface Props extends React.Props<{}> {
    tipo: number;
}

export const ExampleComponent: React.StatelessComponent<Props> = (props) => {

    const content= (props.tipo===1)?"popo1":"pipi-otro";

    return (
        <div className={`example-comp`}>${content}</div>
    );
}

//export default exampleComponent;