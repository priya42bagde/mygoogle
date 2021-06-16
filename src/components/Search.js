import React from 'react'
import {FaSistrix, FaMicrophone} from "react-icons/fa"
import "./API" //{key, cx} from 
//import { key, cx } from "../API";
import axios from 'axios'
import Show from './Show'

function Search(props) {
    console.log(props)
    const [state, setState] = React.useState(props.location.state ? props.location.state :"")
    const [results, setResults] =React.useState([])
    const [info, setInfo] =React.useState("")
    const goBack =()=>{
        props.history.push("/")
    }
    const searchGoogle = async (e) =>{
        e.preventDefault();
        try{
         const response = await axios.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyB6uDTh8DPs1LDSKaJf1le6ZFS9KgoJQRM&cx=a52f1453cf69e7ead&q="+state)
         if (response){
             console.log("response", response.data.item, response.data.searchInformation)
            setResults(response.data.items)
            setInfo(response.data.searchInformation)
         
            }
        }
        catch (error){
          console.log("error", error)
        }
    }
 
    React.useEffect( ()=>{
        async function getPosts(){
            if(props.location.state){
                try{
                    console.log("state",state)
                    const response = await axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyB6uDTh8DPs1LDSKaJf1le6ZFS9KgoJQRM&cx=a52f1453cf69e7ead&q='+ state)
                    if (response){
                        console.log("res0", response)
                        console.log("res1",response.data.item, response.data.searchInformation)
                       setResults(response.data.items)
                       setInfo(response.data.searchInformation)
                    
                       }
                   }
                   catch (error){
                     console.log(error)
                   }
            }
        }
        getPosts()
    },[])
    
    console.log(results, info)
   
    return (
        <div className="search">
        
           <div className="search__form">
              <div className="search__form-logo">
                  <img src="/Images/googlesmall.png" alt="logo" onClick={goBack}/>
              </div>
              <div className="search__form-input">
                <form className="home__form" onSubmit={searchGoogle}>
                   <input required type="text" className="home__input" value={state} onChange={(e)=> setState(e.target.value)}/>
                  <FaSistrix className="search__icon"/>
                  <FaMicrophone className="microphone"/>
                </form>
               </div>
            </div> 
            <div className="data">
            <Show results={results} info={info} />  
            </div> 
        </div>
       
        
    )
}

export default Search
