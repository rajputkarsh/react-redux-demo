import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {

    const total_cakes = useSelector(state => state.cake.total_cakes) 
    const dispatch    = useDispatch()

    return (
        <div>
            <h2>number of cakes (hooks) - {total_cakes} </h2>
            <button onClick={ () => dispatch(buyCake()) }>Buy Cake</button>            
        </div>
  )
}

export default HooksCakeContainer