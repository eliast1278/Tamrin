import React, { Component } from "react"
import Axios from 'axios'


class Weather extends Component {
    state = {
        weather: {},
        loading:true,

    }
    componentDidMount(){
        this.handleweathe()
    }
    ConvertoC(faren) {
        let cel= ((faren - 32) * 5) 
        console.log(faren)
        return cel/9
    }

    getweatherdata = async () => {
        return await Axios.get("http://api.openweathermap.org/data/2.5/weather?q=Tabriz&APPID=b5de779e2be118e1c880c11f3b7a1fda&units=metric")
    }
    handleweathe() {
        this.getweatherdata()
            .then(res => {
                if (res) {
                    this.setState({
                        weather: res.data.main,
                        loading:false
                    })
                }

            })
            .catch(err=>{
                console.log(err)
            })
    }
    render() {
        let { weather,loading } = this.state
        return (
            <div className="main-page back black">
                <div className="container-size">
                    <div className="container weather-form">
                        <div className="">
                            
                            {
                                loading?"tabriz weather is loading"
                                :
                                weather.temp
                            }

                        </div>
                        <div className="">
                            Tabriz weather right now
                       </div>

                    </div>

                </div>

            </div>
        )
    }
}
export default Weather