import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Header, FullComponent } from './controls/controls';



ReactDOM.render(
    <div>
        Hello TS!!
        <Header text="Header" />
        <Button text="Click!" />
        <FullComponent text="this is typescript" />
    </div>,
    document.getElementById('app')
)
