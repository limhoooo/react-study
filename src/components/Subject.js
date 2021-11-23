import { Component } from 'react';

export default class Subject extends Component {
    render() {
        return (
            < header >
                <h1>
                    <a href="/">
                        {this.props.state.subject.title}
                    </a>
                </h1>
                {this.props.state.subject.sub}
            </header >
        )
    }
}