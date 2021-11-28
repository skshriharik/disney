import React from 'react';
import styled from "styled-components";

function Header() {
    return (
        <Nav>
            <Logo src = "/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGNAL</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIE</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/original-icon.svg"/>
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
display: flex;
align-items: center;
padding: 0 36px;
height: 70px;
overflow-x: hidden;
background-color: #090b13;
`;

const Logo = styled.img`

    width: 80px;

`;

const NavMenu = styled.div `
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 12px;
        img {
            height: 20px;
        }
    
    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after{
            content:"" ;
            height: 2.5px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
        &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;

        }
    }
}
    
   
`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;