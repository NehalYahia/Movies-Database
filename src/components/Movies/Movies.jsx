import React, { Component } from 'react'
import axios from "axios"
export default class Movies extends Component {

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

                 <div className="container p-4 my-5">
                        <div className="row text-white">
                            <div className="col-4">
                                <hr className="w-50 bg-white ml-0"/>
                                <h2>Trending<br/>moveies<br/>to watch now</h2>
                                <hr className="w-75 bg-white ml-0"/>
                            </div>
                        { this.state.movies.map((value,index)=>{
                            
                            return(
                                <div key={index} className="col-2 position-relative">
                                    <img src={"https://image.tmdb.org/t/p/original"+ value.poster_path} className="d-block w-100" alt="..." data-toggle="modal" data-target={"#"+value.origin_country+value.id}/>
                                    <p className="m-1 mb-4">{value.name} {value.title}</p>
                                    <p className="position-absolute text-white movie_vote w-100 text-right pr-2 pt-2 h-75">{value.vote_average}</p>

                                    <div className="modal fade " id={value.origin_country+value.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-xl ">
                                            <div className="modal-content">
                                                <div className="d-flex justify-content-center">
                                                    <div className="w-25">
                                                        <img src={"https://image.tmdb.org/t/p/original"+ value.poster_path} class="d-block w-100 h-100" alt="..."/>
                                                    </div>
                                                    <div className="w-50 align-self-center p-5 my-5">
                                                        <h2 className="">{value.name} {value.title}</h2>
                                                        <p>vote : {value.vote_average}</p>
                                                        <p>vote acount : {value.vote_count}</p>
                                                        <p>popularity : {value.popularity}</p>
                                                        <p className="text-white-50">{value.overview}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            )
                        })
                        }
                        </div>
                      
                        
                    </div> 





                   
            </>
        )
    }
}
