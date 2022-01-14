import React from 'react';
import * as axios from 'axios';

class Posts extends React.Component {
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            this.props.setPosts(response.data)
        })
    }

    render() {

        return (
            <div>
                {this.props.postsData.map(p => <div key={p.key}>
                    <span>
                        <div>
                            {p.id}
                        </div>
                    </span>
                    <span>
                        <div>
                            {p.title}
                        </div>
                    </span> 
                    
                </div>)}
            </div>
        )
    }
}

export default Posts