import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux'

function IcecreamContainer(props) {
  return (
    <div>
        <h2>number of icecreams - {props.total_icecreams} </h2>
        <button onClick={props.buyIcecream}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        total_icecreams : state.icecream.total_icecreams,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream : () => {
            dispatch(buyIcecream())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)