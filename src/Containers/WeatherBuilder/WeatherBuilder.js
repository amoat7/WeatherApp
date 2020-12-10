import React, {Component} from 'react'

import classes from './WeatherBuilder.module.css'
import axios from 'axios'


class weatherBuilder extends Component{

    state ={
        id: '',
        cityValue: '',
        cityName: '',
        country: '',
        icon: '',
        temp: '',
        weather:'',
        

        locations :[]
    }

    async componentDidUpdate(){

        if(this.props.cityValue){
            if(!this.state.cityValue||this.state.cityValue!==this.props.cityValue){
                this.setState({cityValue: this.props.cityValue})


                const res = await axios.get( `http://api.openweathermap.org/data/2.5/weather?q=${this.props.cityValue}&appid=0cb48c4c4c12fdb81f6029146f593f0a`)

                const id = res.data.id
                const city = res.data.name
                const country = res.data.sys.country
                const conditions = res.data.weather[0].description
                const temp = (parseFloat(res.data.main.temp) - 273.15)
                console.log(res)     

                const icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`;


                this.setState({id:id})
                this.setState({country:country})
                this.setState({cityName: city})
                this.setState({icon: icon})
                this.setState({temp: temp.toFixed(1)})
                this.setState({weather: conditions})

                const location = 
                            <div key={this.state.id} className={classes.TopLevel}>
                                <div  className={classes.Weather}>
                            <h1 >{this.state.cityName}, {this.state.country}</h1>
                            <div>
                                <img style={{width: '40%'}} src={this.state.icon} alt="WeatherIcon"/>
                            </div>
                            <h2>{this.state.weather}</h2>
                            <h2>{this.state.temp}<span>&#176;</span>C  </h2>
                           
                            <button>Forecast</button>
                        </div>
                            </div>
                            
                console.log(location.props.children.props.children[0].props.children[0])
                const locations = [ location, ...this.state.locations]
                this.setState({locations: locations})
                


        
               
            }
        }


    }
    render(){

            return(
                <div className={classes.Locations}>
                    {this.state.locations}
                </div>            
    
            )
        }

        
        
    }


export default weatherBuilder