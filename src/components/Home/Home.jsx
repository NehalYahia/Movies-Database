import React, { Component } from 'react'
import axios from "axios"
import Movies from '../Movies/Movies'
import Tv from '../TV/Tv'

export default class Home extends Component {
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
               <div className="container-fluid overlay_parent">
                   <div className="row  overlay_parent">
                   { this.state.movies.map((value,index)=>
                   {
                       if(index<5 && index!=2)
                        return(
                       <div key={index} className="col-2 p-0">
                            <img src={"https://image.tmdb.org/t/p/original"+ value.poster_path} className="w-100 h-100"/>
                            <div className="overlay"></div>
                       </div>
                        )
                        if(index==2)
                        return(
                            <div key={index} className="col-4 p-0 ">
                                 <img src={"https://image.tmdb.org/t/p/original"+ value.poster_path} className="w-100 h-100"/>
                            </div>
                             )




                      
                        })


                   
                       
                   }  
                       
                       
                   
               </div>    
               </div>

               


                <Movies/>
                <Tv/>


                  
            </>
        )
    }
}
