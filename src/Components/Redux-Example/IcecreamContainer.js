import React from 'react'
import {buyIcecream} from '../../Redux'
import {connect} from 'react-redux'
function IcecreamContainer(props) {
  return (
    <>
    <div>Number of cakes - {props.numOfIcecreams}</div>
    <button onClick={props.buyIcecream}>Buy Icecream</button>
    </>
  )
}

const mapStateToProps = state => {
    return {
        numOfIcecreams: state.iceCream.numOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)