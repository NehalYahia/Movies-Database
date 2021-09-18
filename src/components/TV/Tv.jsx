import React, { Component } from 'react'
import axios from "axios"
import img from "../../images/rmXBfG7K6mCG23N8M1k427cMLkT.jpg"
export default class Tv extends Component {

    
    state={
        movies:[]
    }

    
    getData= async ()=>{
        let{data}=await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361 `)
        console.log(data) ;
        this.setState({
            movies:data.results
        });
    }


    componentDidMount(){
        this.getData();
    }
    render() {
        return (
            <>
            <div className="container-fluid p-5 second_background text-white" >
                <h2 className="text-center">Trending tv to watch now</h2>
                
                <div id="carouselExampleControlsNoTouching" class="carousel slide bg-light  m-5 " data-touch="false" data-interval="false">
                    <div class="carousel-inner ">
                    { this.state.movies.map((value,index)=>
                {
                        if(index===0)
                            return(
                                    <div key={index} class="carousel-item active">
                                        <div className="d-flex justify-content-center">
                                            <div className="w-25">
                                                <img src={"https://image.tmdb.org/t/p/original"+ value.poster_path} class="d-block w-100 h-100" alt="..."/>
                                            </div>
                                            <div className="w-50 align-self-center p-5 my-5 second_background">
                                                <h2 className="">{value.name} {value.title}</h2>
                                                <p>vote : {value.vote_average}</p>
                                                <p>vote acount : {value.vote_count}</p>
                                                <p>popularity : {value.popularity}</p>
                                                <p className="text-white-50">{value.overview}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                        else
                            return(
                                    <div key={index} className="carousel-item">
                                        <div className="d-flex justify-content-center">
                                            <div className="w-25">
                                                <img src={"https://image.tmdb.org/t/p/original"+ value.poster_path} class="d-block w-100 h-100" alt="..."/>
                                            </div>
                                            <div className="w-50 align-self-center p-5 my-5 second_background">
                                                <h2 className="">{value.name} {value.title}</h2>
                                                <p>vote : {value.vote_average}</p>
                                                <p>vote acount : {value.vote_count}</p>
                                                <p>popularity : {value.popularity}</p>
                                                <p className="text-white-50">{value.overview}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                })
                    }
   
   
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControlsNoTouching" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControlsNoTouching" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </>
        )
    }
}
