import * as React from 'react';

interface IProps {
    text: string;
    age?: number
}

interface IState {
    email: string;
    name: string;
}

class FullComponent extends React.Component<IProps, IState> {

    state: IState = {
        name: "",
        email: ""
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value }: any = e.target;
        this.setState({
            [name]: value
        });
    };

    public render() {
        const { text } = this.props
        const { name } = this.state
        return (
            <React.Fragment>
                <h1>State Full Component</h1>
                <p>{text}</p>
                <p>{name}</p>
                <input type="text" name="name" value={name} onChange={this.handleChange} />
            </React.Fragment>

        )
    }
}

export default FullComponent;
