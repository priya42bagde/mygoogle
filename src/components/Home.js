import React from 'react'
import {FaSistrix, FaMicrophone} from "react-icons/fa"

function Home(props) {
    const [state, setState] = React.useState("")
    const searchGoogle = e =>{
        console.log("priya", state)
        props.history.push({pathname : "/search", state})
       
    }
    return (
        <div className="home">
            <div className="home__container">
               <div className="home__logo">
                  <img src="/Images/logo.jfif" alt="googlelogo"/>
               </div>
               <form className="home__form" onSubmit={searchGoogle}>
                   <input type="text" className="home__input" onChange={(e)=>setState(e.target.value)} value={state}/>
                   <div className="home__group">
                        <input required type="submit" className="home__btn" value="Google Search"/>
                  </div>
                  <FaSistrix className="search__icon"/>
                  <FaMicrophone className="microphone"/>
                </form>
            </div>    
        </div>
    )
}

export default Home
