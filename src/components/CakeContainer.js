import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>number of cakes - {props.total_cakes} </h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        total_cakes : state.cake.total_cakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => {
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)