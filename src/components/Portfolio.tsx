import React from 'react'
import './css/portfolio.css'
import NavBar from './NavBar'

export default function Portfolio() {
    return (
        <>
        
        <NavBar />
        <div className="Home-page">
            <div className="container">
                    
                    <div className="left-content"> 

                   

                        <h1 id="name">Hi, I'm Abhay Verma</h1>   
                        <p id="tagLine">Computer Science Engineer</p>
                    </div>

                    {/* <div className="main-content">
                    <h1>center</h1>

                    </div> */}
                    
                    <div className="right-content">
                        <ul id="social">
                            <li><a href="l" id="Github">github</a></li>
                            <li><a href="l" id="Twitter">Twitter</a></li>
                            <li><a href="l" id="LinkedIn">LinkedIn</a></li>
                        </ul>                 
                    </div>

        


            </div>
            
            <div className="aboutMe">
          
                            <div className="content">
                                I am a
                            </div>
            </div>
        
    </div> 
         
        <div className="techStack">
        <h2 id="heading tech">Technologies I am familiar with</h2>
           <div className="technology">
           
          
           
           </div>
        </div>
        <div className="projects">
           
        </div>
        <div className="contactMe"> 
        
        </div>
       
        </>
    )
}
