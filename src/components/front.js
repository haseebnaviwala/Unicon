import React, { useEffect, useState } from "react";
import "./front.css";
import unicon from './images/unicon.png';
import gtech from './images/gtech1.png';
import redfyne from './images/redfyne1.png';
import loom from './images/loom.png';
import laptop from './images/laptop-02-02.png';
import mask from './images/Mask-Group-4.png';
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { BrowserRouter ,useNavigate, Link } from "react-router-dom";
  

export default function Front() {

    const [parentHover1, setparentHover1] = useState(false);
    const [parentHover2, setparentHover2] = useState(false);
    const [parentHover3, setparentHover3] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    // const [windowScroll, setwindowScroll] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
        const onScroll = e => {
            setScrollTop(window.scrollY);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
          //   console.log(scrolling);
            console.log(scrollTop);
            if(scrollTop > 200 && scrollTop < 650){
              setparentHover1(true);
            }
            else if(scrollTop >= 650){
              setparentHover3(true);
              setparentHover1(false);
            }
            else{
              setparentHover1(false);
              setparentHover3(false);
            }
        };
        window.addEventListener("scroll", onScroll);
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
          window.removeEventListener("scroll", onScroll);
        };
      }, [scrollTop, scrolling]);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        // console.log(window.scrollY);
        return {innerWidth, innerHeight};
    }


    // let navigate = useNavigate(); 
    //     const routeChange = () =>{ 
    //     let path = `newPath`; 
    //     navigate(path);
    // }

    // function navigate(){
    //     window.navigator("https://www.gtech.com.pk")
    // }

    // useEffect(() => {
    //     const onScroll = e => {
    //       setScrollTop(window.scrollY);
    //       setScrolling(e.target.documentElement.scrollTop > scrollTop);
    //     //   console.log(scrolling);
    //       console.log(scrollTop);
    //       if(scrollTop > 200 && scrollTop < 650){
    //         setparentHover1(true);
    //       }
    //       else if(scrollTop >= 650){
    //         setparentHover3(true);
    //         setparentHover1(false);
    //       }
    //       else{
    //         setparentHover1(false);
    //         setparentHover3(false);
    //       }
    //     };
    //     window.addEventListener("scroll", onScroll);
    
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, [scrollTop, scrolling]);

    return (
        <div className="front" style={parentHover1 ? {background: `url(${loom})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed"} : {} && parentHover2 ? {background: `url(${mask})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed"} : {} && parentHover3 ? {background: `url(${laptop})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed"} : {}}>
            <div className="filter">
                <div className="under-front">
                    <div className="first" onClick={() =>{window.location = 'https://redfyne.com';}} onMouseOver={() => { windowSize.innerWidth < 920 ? setparentHover1(false) : setparentHover1(true)}} onMouseOut={() => {setparentHover1(false)}}>
                        <div className="image-div">
                            <img src={redfyne} className="redfyne" alt="logo"></img>
                        </div>
                        <div className="text-div">
                            <p>In today's highly competitive and ruthless world , custom cycle times and responsiveness are important factors to sustain in the world of business.</p>
                        </div>
                        <div className="explore-div">
                            <p>Explore now</p>
                        </div>
                    </div>

                    <div className="second" onClick={() =>{window.location = 'http://www.unicongroup.com.pk/main';}} onMouseOver={() => {windowSize.innerWidth < 920 ? setparentHover2(false) : setparentHover2(true)}} onMouseOut={() => {setparentHover2(false)}}>
                        <div className="image-div">
                            <img src={unicon} className="unicon" alt="logo"></img>
                        </div>
                        <div className="text-div">
                            <p>UNICON GROUP along with its competent management and a highly capable workforce makes sure that it does not compromise its work stature for any reason.</p>
                        </div>
                        <div className="explore-div">
                            <p>Explore now</p>
                        </div>
                    </div>

                    <div className="third" onClick={() =>{window.location = 'https://gtech.com.pk';}} onMouseOver={() => {windowSize.innerWidth < 920 ? setparentHover3(false) : setparentHover3(true)}} onMouseOut={() => {setparentHover3(false)}}>
                        <div className="image-div">
                            <img src={gtech} className="gtech" alt="logo"></img>
                        </div>
                        <div className="text-div">
                            <p>In today's highly competitive and ruthless world , custom cycle times and responsiveness are important factors to sustain in the world of business.</p>
                        </div>
                        <div className="explore-div">
                            <p>Explore now</p>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
}