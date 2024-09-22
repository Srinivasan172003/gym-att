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
        return (
            <>
                <center>
                    <form class>
                        <div class='overall'><br></br>
                            <img src={logo} alt="Logo" id='logo'></img>
                            <h1 class='h1'>GymFlow </h1><br></br>
                            <div>
                                <input class="name" type="text" placeholder="Enter ID" ></input>
                            </div><br></br><br></br>
                            
                            <button type='submit' class="btn">Enter</button><br></br>
                            <button type='reset' onClick={this.handleReset} class='btn-res'>Reset</button>
                        </div>
                    </form>
                </center>
            </>
        );
    }
}

export default Gymcol;