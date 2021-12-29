// import * as axios from "axios";
// import React from "react";

// let Users = (props) => {
    // if (props.users.length === 0) {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    //         props.setUsers(response.data)
    //     });

    //     props.setUsers(
    //         [
    //             {
    //                 id: 1, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
    //                 followed: 'true', fullName: 'Gevorg', status: 'lok', location: { city: 'Abovyan', country: 'Armenia' }
    //             },
    //             {
    //                 id: 2, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
    //                 followed: 'false', fullName: 'John', status: 'lok', location: { city: 'California', country: 'United States' }
    //             },
    //             {
    //                 id: 3, photoUrl: 'https://www.discordavatars.com/wp-content/uploads/2020/05/369512270289436673.jpg',
    //                 followed: 'true', fullName: 'Jennifer', status: 'lok', location: { city: 'Paris', country: 'France' }
    //             },
    //         ]
    //     )
    // }
//     debugger;

//     return (
//         <div>
//             {props.users.map(u => <div key={u.key}>
//                 <span>
//                     <img src={u.photoUrl} />
//                 </span>
//                 <span>
//                     <div>
//                         {u.followed
//                             ? <button onClick={props.follow(u.id)}>Follow</button>
//                             : <button onClick={props.unFollow(u.id)}>Unfollow</button>}
//                     </div>
//                 </span>
//                 <span>
//                     <div>{u.fullName}</div>
//                     <div>{u.status}</div>
//                 </span>
//                 <span>
//                     <div>{u.location.country}</div>
//                     <div>{u.location.city}</div>
//                 </span>
//             </div>)}
//         </div>
//     )
// }

// export default Users;