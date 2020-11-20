import React,{useContext} from 'react';
import { Link,withRouter } from 'react-router-dom';
import styled from 'styled-components';

import UIC from '../../context/Context';
import littleLogo from '../../assets/img/arraylogofinal.png';





const Navigation = ({history,location}) => {
    
    const {toggleSidedrawer,open,page,setPage,routes}=useContext(UIC)
    const goHome = () => {
        setPage({...page,home: true, roadmap: false, team: false,prev:3, curr: 0})
        history.push({
            pathname: routes[0],
        })
        sessionStorage.setItem('route', 'home')
        
    }
    const goRoadmap = () => {
        if (page.curr ===2) {
            setPage({...page,home: false, roadmap: true, team: false,prev:2,curr: 1})
        }else {
            setPage({...page,home: false, roadmap: true, team: false,prev:0,curr: 1})
        }
        history.push({
            pathname: routes[1],
        })
        sessionStorage.setItem('route', 'roadmap')
    }
    const goTeam = () => {
            setPage({...page,home: false, roadmap: false, team: true,prev:1, curr: 2})
        history.push({
            pathname: routes[2],
        })
        sessionStorage.setItem('route','team')
    }
    return (
        <Nav className="header">
            <img src={littleLogo} alt="array logo"/>
            <nav>
                <Link to='/' onClick={goHome} className={page.home ? "nav-link bordered" : "nav-link"}>array.finance</Link>
                <Link to='/roadmap' onClick={goRoadmap} className={page.roadmap ? "nav-link bordered" : "nav-link"}>roadmap</Link>
                {/* <Link to='/faq' className="nav-link">faq</Link> */}
                <Link to='/team' onClick={goTeam} className={page.team ? "nav-link bordered" : "nav-link"}>team</Link>
                <a href="https://varianhalai.github.io/array-dash/" target="_blank" rel='noreferrer'>dashboard</a>
            </nav>
            <i 
            className={open ? "fas fa-bars rotate" : "fas fa-bars"} 
            onClick={toggleSidedrawer}
            ></i>
        </Nav>
    );
}

export default withRouter(Navigation);
const Nav = styled.div`
    display: flex;
    padding-left: 3%;
    height: 80px;
    justify-content: flex-start;
    align-items: center;
    background-color: #121212;
    color: white;
    
    img {
        height: 60px;
        width: 60px;
    }
    h4 {
        font-size: 3em;
        margin-left: 25px;
        margin-top: 0;

    }
    nav {
        margin-left: 25px;
        a {
            font-size: 2.6em;
            padding: 0px 10px;
            margin: 0 40px;
            text-decoration: none;
            color: white;
            transition: all 400ms ease-in;
            
       
        }
    }
    .fas {
        display: none;
    }
    @media(max-width: 2000px) {
        padding-left: 100px;
    }
    //max-width: 2000px

    @media(max-width: 970px) {
        padding-left: 50px;
        img {
            height: 40px;
            width: 40px;
        }
        nav {
            margin-left: 0px;
            a {
                margin: 0 15px;
                font-size: 2em;
            }
        }
    }
    @media(max-width: 768px) {
        justify-content: space-between;
        padding: 0 15px;
        nav {
            display: none;
        }
        .fas {
            display: inline;
            color: rgba(255,255,255, 0.8);
            font-size: 2.3em;
            transition: all 0.3s ease;
        }
        .rotate {
            transform: rotate(90deg);
        }
    }
    

    .bordered {
        border: 4px solid white;
    }

`