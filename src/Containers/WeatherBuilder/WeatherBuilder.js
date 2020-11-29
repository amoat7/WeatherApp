import React, {Component} from 'react'

import classes from './WeatherBuilder.module.css'
import axios from 'axios'


class weatherBuilder extends Component{

    state ={
        cityValue: '',
        cityName: '',
        country: '',
        icon: '',
        temp: '',
        weather:'',
        forecast:''
    }

    async componentDidUpdate(){

        if(this.props.cityValue){
            if(!this.state.cityValue||this.state.cityValue!==this.props.cityValue){
                this.setState({cityValue: this.props.cityValue})
                const id = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=2Auka6f6bXL2UGuCnQZrXXT4z5comAoh&q=${this.props.cityValue}&language=en-Us`)
                
                const conditions = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${id.data[0].Key}?apikey=2Auka6f6bXL2UGuCnQZrXXT4z5comAoh`);

                const forecast = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${id.data[0].Key}?apikey=2Auka6f6bXL2UGuCnQZrXXT4z5comAoh`)
                

                const icon = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${('0'+conditions.data[0].WeatherIcon).slice(-2)}-s.png`;
                this.setState({forecast:forecast.data.Headline.Text})
                this.setState({country:id.data[0].Country.ID})
                this.setState({cityName: id.data[0].LocalizedName})
                this.setState({icon: icon})
                this.setState({temp: conditions.data[0].Temperature.Metric.Value})
                this.setState({weather: conditions.data[0].WeatherText})


        
               
            }
        }


    }
    render(){
        if(this.state.cityValue){
            return(
                <div className={classes.Weather}>
                    <h1 >{this.state.cityName}, {this.state.country}</h1>
                    <div>
                        <img src={this.state.icon} alt="WeatherIcon"/>
                    </div>
                    <h2>{this.state.temp}<span>&#176;</span>C  </h2>
                    <h2>{this.state.weather}</h2>
                    <p style={{padding:"5px"}}>Forecast: {this.state.forecast}</p>
                </div>
            
    
            )
        }

        else{
            return('')
        }
        
    }
}

export default weatherBuilder