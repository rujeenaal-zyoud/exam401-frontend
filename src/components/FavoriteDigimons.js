import React, { Component } from 'react'
import FavDigCard from './FavDigCard';
import axios from 'axios';
import UpdateForm from './UpdateForm';
export class FavoriteDigimons extends Component {


    constructor(props) {
        super(props);
        this.state = {
            digimonsFav: [],
            showFavDigimons: false,
            showForm: false,
            name: '',
            level: '',
            id: '',
        }
    }


    componentDidMount = async () => {
        let result = await axios.get(`${process.env.REACT_APP_SERVER}/getDataFav`);
        // console.log(result.data);
        this.setState({
            digimonsFav: result.data,
            showFavDigimons: true,
        })
    }

    updateName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    updateImg = (e) => {
        this.setState({
            img: e.target.value,
        })
    }

    updateLevel = (e) => {
        this.setState({
            level: e.target.value,
        })
    }



    updateForm = async (idx) => {
        this.setState({
            showForm: true,
            name: this.state.digimonsFav[idx].name,
            level: this.state.digimonsFav[idx].level,
            img: this.state.digimonsFav[idx].img,
            id: this.state.digimonsFav[idx]._id,



        })
    }

         updatData = async (e) => {
          e.preventDefault();
           const updataBody = {
            name: this.state.name,
            img: this.state.img,
            level: this.state.level,
        }
        //create request
        let upData = await axios.put(`${process.env.REACT_APP_SERVER}/updateData/${this.state.id}`, updataBody)
        this.setState({
            showForm: false,
        })
    }



    deleteData = async (id) => {

        const deleData = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteData/${id}`);

        this.setState({
            digimonsFav: deleData.data,
        })
    }



    render() {
        return (
            <div>
                {this.state.showForm &&
                    <UpdateForm
                        updateName={this.updateName}
                        updateImg={this.updateImg}
                        updateLevel={this.updateLevel}
                        name={this.state.name}
                        img={this.state.img}
                        level={this.state.level}
                        updatData={this.updatData}
                        updateForm={this.updateForm}
                    />}


<div style={{display:'flex',flexFlow:'row', flexWrap:'wrap',padding:'5rem'}}>
                {this.state.showFavDigimons &&
                    this.state.digimonsFav.map((digimon, index) => {
                        return (<FavDigCard
                            index={index}
                            digimon={digimon}
                            key={index}
                            deleteData={this.deleteData}
                            updateForm={this.updateForm} />)


                    })}
                    </div>
            </div>
        )
    }
}

export default FavoriteDigimons
