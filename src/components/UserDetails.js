import React from 'react'

const UserDetails = ({user, accounts}) => {
    if(!user) return null
    let account = []

    const searchAccount = Object.keys(accounts).map(key => {
        if (key === user.userAcc) {
            account.push(accounts[key].apps)
        }
    })

    const showAccount = Object.values(account).map(title => {
        const showTitle = Object.values(title).map(data => {
            return data.title
        })
        return showTitle
    })

    return (
        <div className='user-details'>
            <h2>{user.userName}</h2>
            <p>Account: {user.userAcc}</p>
            <p>Title of the app: {showAccount}</p>
        </div>
    )
}

export default UserDetails