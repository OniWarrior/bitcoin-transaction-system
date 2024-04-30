import React from "react";
import { connect } from "react-redux";

const PastOrderCard=(props)=>{

}

const mapStateToProps=(state)=>{
    return{
        client:state.clientReducer.client,
        loading:state.clientReducer
    }
}