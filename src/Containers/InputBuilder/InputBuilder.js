import classes from './InputBuilder.module.css'
import React, {Component} from 'react'
import Aux from '../../Components/hoc/Auxiliary/Auxiliary'
import WeatherBuilder from '../WeatherBuilder/WeatherBuilder'

class inputBuilder extends Component{

    state ={
        cityValue:'',
        citySubmit:''
    }

    valueChangedHandler = (event)=>{
        this.setState({cityValue: event.target.value})
        
    }


    valueSubmitHandler = (event)=>{
        
        
        this.setState({citySubmit: this.state.cityValue})
    }
    
    formsubmitHandler(){
        return false;
    }

    render(){
        return(
            <Aux>
            <div className={classes.Main_}>
            <form action="#" className={classes.Form}>
                <input className={classes.Input_} value={this.state.cityValue} onChange={this.valueChangedHandler} type="text" required placeholder="Enter City e.g:Brisbane"></input>
                <input type="submit" value="Get Weather" onClick={this.valueSubmitHandler}/>
            </form>
                
               
                <div className={classes.Weather}>
                    <WeatherBuilder cityValue={this.state.citySubmit}></WeatherBuilder>
                </div>
            </div>
            
            </Aux>
        
        )
    }
}



export default inputBuilder;