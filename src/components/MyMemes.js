import React, { Component } from 'react';
import { connect } from 'react-redux';


class MyMemes extends Component {


    render(){

        return(
            <div>
                {
                    this.props.myMemes.map(cur =>{
                        return(
                            <img
                            key={cur.data.url}
                            src={cur.data.url}
                            alt='my-meme'
                            className="my-meme-img"/>
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state)=> {

    return{
        myMemes: state.myMemes.myMemes
    }
}




export default connect(mapStateToProps, null)(MyMemes); 