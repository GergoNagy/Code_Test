import React from 'react'

const UserDetails = ({user, accounts}) => {
    if(!user) return null
    let account = []

    const searchAccount = Object.keys(accounts).map(key => {
        if (key === user.userAcc) {
            account.push(accounts[key].apps)
        }
    })

    return (
        <div className='user-details'>
            <h2>{user.userName}</h2>
        </div>
    )
}

export default UserDetails