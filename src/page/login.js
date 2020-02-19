import React, { Component } from "react"
import Axios from 'axios'


class login extends Component {
    state = {
        weather: {},
        loading: false,
        info: "",
        field: {
            username: "",
            password: "",
        },
        errors: []
    }
    componentDidMount() {
        this.handleweathe()
    }
    ConvertoC(faren) {
        let cel = ((faren - 32) * 5)
        console.log(faren)
        return cel / 9
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
                        loading: false
                    })
                }

            })
            .catch(err => {
                console.log(err)
            })
    }
    handleChange(event) {
        let field = this.state.field;
        const target = event.target;
        field[target.name] = target.value;
        this.setState({ field });

    }
    chekValiadtion() {
        console.log("heloo")
        const { username, password, confirmpassword } = this.state.field
        let errors = {}
        if (username.length == 0) {
            errors["username"] = "username is empty"
        }
        if (password.length == 0) {
            errors["password"] = "password is empty"
        }
        if (confirmpassword.length == 0) {
            errors["confirmpassword"] = "confirmpassword is empty"
        }
        if (confirmpassword !== password) {
            errors["confirmpassword"] = "not same with password"
        }
        this.setState({ errors, loading: true })

    }


    render() {
        let { weather, loading, errors } = this.state
        return (
            <div className="main-page back black">
                <div className="container-size">
                    <div className="container weather-form justify-content-center">
                        <input className={errors.username ? "is-invalid" : ""} name="username" placeholder="username" onChange={this.handleChange.bind(this)} />
                        <span className="m-0">{errors["username"]}</span>
                        <input className={errors.password ? "is-invalid" : ""} name="password" placeholder="password" onChange={this.handleChange.bind(this)} />
                        <span className="m-0">{errors["password"]}</span>
                        <button className="btn text-white " onClick={() => this.chekValiadtion()}>
                            {
                                loading ? <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">loading...</span>
                                </div> : <>submit</>
                            }

                        </button>
                    </div>

                </div>

            </div>
        )
    }
}
export default login