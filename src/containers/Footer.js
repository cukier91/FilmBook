import React from 'react'
import "../App.css";

export default function Footer() {
    return (
        <div className='footer'>
            Data source: <a target={"_blank"} style={{marginTop:'10px', color:'#FFC300'}} href="https://www.themoviedb.org/"> https://www.themoviedb.org/</a> 
        </div>
    )
}
