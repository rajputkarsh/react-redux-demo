import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer(props) {

    useEffect(() => {
        props.fetchUsers()
    }, [])

    return props.userData.loading ? 
        <h2>Loading Data</h2>
        : props.userData.error 
            ? <h2>Error : {props.userData.error}</h2> 
            : <ul>  {props.userData.users.map(user => <li>{user.name}</li>) } </ul>
}

const mapStateToProps = state => {
    return {
        userData : state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)