import { Component } from 'react';

export default class Toc extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
        for (let i = 0; i < data.length; i++) {
            lists.push(<li key={data[i].id}><a href={`/content/${data[i].id}`}>{data[i].title}</a></li>)
        }
        return (
            <nav>
                {lists}
            </nav>
        )
    }
}