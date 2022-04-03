import React, {useState } from 'react'

import { connect } from 'react-redux'
import { buyCake } from '../redux'



function NewCakeContainer(props) {

    const [number, setNumber] = useState(1)

    return (
        <div>
            <input type="text" value={number} onChange={(e) => {setNumber(e.target.value)}}  />
            <h2>number of cakes - {props.total_cakes} </h2>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        total_cakes: state.cake.total_cakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => {
            dispatch(buyCake(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)