import React, {Component} from 'react'

import classes from './WeatherBuilder.module.css'
import axios from 'axios'

class weatherBuilder extends Component{

    state ={
        cityValue: ''
    }

    componentDidUpdate(){

        if(this.props.cityValue){
            if(!this.state.cityValue||this.state.cityValue!==this.props.cityValue){
                this.setState({cityValue: this.props.cityValue})
            }
        }


    }
    render(){
        return(
            <div className={classes.Weather}>
                <h1></h1>
            </div>
        

        )
    }
}

export default weatherBuilder