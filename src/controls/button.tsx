import * as React from 'react';

interface ButtonProps {
    text: string,
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={() => alert('hello world!')}>{props.text}</button>
    )
}

export default Button
