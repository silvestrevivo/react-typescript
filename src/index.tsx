import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Header } from './controls/controls';


ReactDOM.render(
    <div>
        Hello TS!!
        <Header text="Header" />
        <Button text="Click!" />
    </div>,
    document.getElementById('app')
)
