import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {

    const user = Object.values(props.userList).map((user, index) =>
        <UserListItem 
            key={index}
            userName={user.name}
            userAcc={user.account}
            onUserSelect={props.onUserSelect}
        />
    )

    return(
        <ul className='user-list'>
            {user}
        </ul>
    )
}

export default UserList