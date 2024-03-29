import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'

export const Nav =styled.nav `
background:#4ce322;
height: 100px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink =styled(Link)`
color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight:bold;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
  color: #000000;
  }

`;


export const NavMenu=styled.div`
display: flex;
align-items: center;
margin-right: -24px;

`;

export const NavBtn =styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
  display: none;
}
font-weight: bold;

`;

export const NavBtnLink=styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #276932;
  }
`;

