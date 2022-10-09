import React, { Component } from "react";
import axios from "axios";

const SeriesApi = axios.create({
    baseURL:
        "https://api.themoviedb.org/3/tv/popular?api_key=fe71ddd34e889522b4318fe3778f3dbc&language=pt-BR&page=1"
});
console.log(SeriesApi);

export default class Series extends Component {
    state = {
        series: []
    };
    componentDidMount() {
        this.getSeries();
    }

    getSeries = async () => {
        const resposta = await SeriesApi.get();
        console.log(resposta);

        const allSeries = resposta.data.results.map((item) => {
            return {
                ...item,
                img: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            };
        });
        this.setState({
            series: allSeries
        });
        console.log(allSeries);
    };

    render() {
        return (
            <div>
                {this.state.series.map((item, index) => (
                    <div key={index}>
                        <ul>
                            <li>{item.original_name}</li>
                        </ul>
                        <img src={item.img} alt={item.overview} />
                    </div>
                ))}
            </div>
        );
    }
}