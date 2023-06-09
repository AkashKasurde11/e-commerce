import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from './../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        const { onRouteChange } = this.props;
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" style={{width: '300px', height: 'auto'}} />
               </Link> 
               <ul className="navbar-nav align-items-center ml-auto flex flex-row">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Products
                    </Link>
                 </li>
                 <li className="nav-item ml-5 mr-3
                 ">
                    <Link onClick={() => onRouteChange('signout')} to="/" className="nav-link">
                       Sign Out
                    </Link>
                 </li>
               </ul>
               
               <Link to="/cart" className="m-3">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus"></i>
                  </ButtonContainer>
               </Link>

               <Link  to="/profile" className="m-3">
                  <ButtonContainer>
                     <i className="fas fa-solid fa-user"></i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
