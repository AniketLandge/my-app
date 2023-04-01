import React from 'react'
import {buyCake} from '../../Redux'
import {connect} from 'react-redux'
function CakeContainer(props) {
  return (
    <>
    <div>Number of cakes - {props.numOfCakes}</div>
    <button onClick={props.buyCake}>Buy Cake</button>
    </>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)