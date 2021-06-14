import React, { Component } from 'react';
import axios from 'axios';
import DigimonCard from './DigimonCard';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digimons: [],
            showDigimons: false,
        }
    }


    componentDidMount = async () => {
        let result = await axios.get(`${process.env.REACT_APP_SERVER}/getDigimons?digimon=digimon`);
        // console.log(result.data);
        this.setState({
            digimons: result.data,
            showDigimons: true,
        })
    }

    addToFav = async (digimon) => {
        await axios.post(`http://localhost:3303/addDataToFav`, digimon)
    }

    render() {
        return (
            <>
            <div style={{display:'flex',flexFlow:'row', flexWrap:'wrap',padding:'5rem'}}>
                {this.state.showDigimons
                    && this.state.digimons.map((digimon, idx) => {
                        return (
                            <DigimonCard
                                key={idx}
                                digimon={digimon}
                                addToFav={this.addToFav}
                            />
                        )
                    })}
                    </div>
            </>
        )
    }
}

export default Main