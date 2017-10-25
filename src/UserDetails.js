import React from 'react'

const UserDetails = ({user, accounts}) => {
    if(!user) return null
    let account = []

    return (
        <div className='user-details'>
            <h2>{user.userName}</h2>
        </div>
    )
}

export default UserDetails