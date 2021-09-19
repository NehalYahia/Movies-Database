import {createStore} from "redux"


let initialState ={
    istoken: false
}

function reducer(prevState=initialState,action){
    console.log(action.type)
    switch(action.type){
        
        case 'WITHTOKEN':{
            return{
                
            istoken:prevState.istoken= true
            }
        }
        case 'WITHOUTTOKEN':{
            return{
                
            istoken:prevState.istoken= false
            }
        }

        

    }
    return prevState

}

let store =createStore(reducer)

export  default  store
