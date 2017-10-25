import React from 'react'

const UserListItem = ({userName, userAcc, onUserSelect}) => {

    return (
        <li onClick={()=> onUserSelect({userName, userAcc})} 
            className='user-list-item'>
            <div>{userName}</div>
        </li>
    )
}

export default UserListItem