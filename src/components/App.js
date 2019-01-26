import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMemesJson } from '../actions/index';
import MemeItem from './MemeItem';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import '../styles/index.css';


class App extends Component {

    state = {
        memeLimit: 10,
        text0: '',
        text1: '',
    }

    componentDidMount(){
        this.props.startMemes();
        console.log('props', this.props.memes)
    }
    updateText1 = (e)=>{
        this.setState({text1: e.target.value})
    }
    updateText0 = (e)=>{
        this.setState({text0: e.target.value})
    }

   
    render(){
        const memeUpdate = ()=>{
            this.setState({memeLimit: this.state.memeLimit + 10})
        }

        
         const  memeItem = (
            this.props.memes.slice(0, this.state.memeLimit).map(cur =>{
                return (          
                    <MemeItem key={cur.id} meme={cur}/>
                )
            })
          
        )     
         
        return(
            <div>
                <h2><u>Welcome to the Meme Generator!!!</u></h2>
                <h4><i>Write Some Text</i></h4>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Top</ControlLabel>
                        {' '}
                        <FormControl
                        type='text'
                        onChange={(event)=>this.updateText0(event)}
                        >
                        </FormControl>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <ControlLabel>Bottom</ControlLabel>
                        {' '}
                        <FormControl 
                        type='text'
                        onChange={(event)=>this.updateText1(event)}></FormControl>
                    </FormGroup>
                </Form>

               {memeItem}
               <div 
                className = 'memeBtn'
                onClick={()=>memeUpdate()}>Load 10 More Memes...
                </div>
                    
                
            </div>

        )
    }
}

const mapStateToProps = (state)=> {
    return {
        memes:  state.getMemes.memesArr,
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        startMemes: ()=>dispatch(fetchMemesJson())
    }
}





export default connect(mapStateToProps ,mapDispatchToProps)(App);