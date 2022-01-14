import * as axios from "axios";
import React from "react";

class Users extends React.Component {

    // constructor (props) {
    //     super(props)
    //     if (this.props.users.length === 0) {
    //         axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    //             props.setUsers(response.data)
    //         });
    //     }
    // }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            this.props.setUsers(response.data)
        });
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.key}>
                    <span>
                        <div>
                            <img src={u.photoUrl} />
                        </div>
                    </span>

                    <span>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>

                    <span>
                        <div>{u.name}</div>
                        <div>{u.username}</div>
                    </span>

                    <span>
                        <div>{ }</div>
                        <div>{ }</div>
                    </span>
                </div>)}
            </div>
        );
    }

}

export default Users;