import axios from 'axios';
import React, { Component } from 'react';
import './gymcol.css';
import logo from './images/Untitled (3).png';

class Gymcol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gyms: [],
            currentTime: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {

            this.setState({ currentTime: new Date().toLocaleTimeString() });
        }, 1000);
    }
    componentDidMount() {
        axios.get('http://localhost:3001/gyms')
            .then(response => {
                this.setState({ gyms: response.data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    handleReset = () => {
        console.log('Form fields reset!');
    };

    render() {
        const { gyms } = this.state;
        return (
            <>
                <center>
                    <form class>
                        <div class='overall'><br></br>
                            <img src={logo} alt="Logo" id='logo'></img>
                            <h1 class='h1'>GYMFLOW </h1>
                            {/* <ul>
                                {gyms.map(gym => (
                                    <li key={gym.id}>{gym.name} - {gym.location}</li>
                                ))}
                            </ul> */}~
                            <div>
                                <input class="name" type="number" placeholder="              ENTER YOUR ID HERE" />
                            </div><br></br>
                            {/* <div>
                                <label htmlFor="currentDate" class='One'>SELECT TODAY'S DATE 📅</label>
                            </div>
                            <input type="date" id="currentDate" name="currentDate"></input> */}
                            <h3 class='One'>Current Time ⏳: {this.state.currentTime}</h3>
                            <button type='submit' class="btn">ENTER</button><br></br>
                            <button type='reset' onClick={this.handleReset} class='btn'>RESET</button>
                            <p style={{fontSize: 'large'}} class='h1'><b>STEP AHEAD TO SUCCEED</b></p>
                        </div>
                    </form>
                </center><br></br><br></br><br></br>
                <center>
                    <footer>
                        <header class="header1">
                            <nav class="navbar">
                                <a href="#" class="active">home</a>
                                <a href="#">about</a>
                                <a href="#">services</a>
                                <a href="#"> plans</a>
                                <a href="#">contact</a>
                            </nav>
                        </header>
                    </footer>
                </center>
            </>
        );
    }
}

export default Gymcol;