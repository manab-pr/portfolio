import styled from "styled-components";

export const Box =styled.div`
padding: 80px 60px;
background: #4ce322;
position: relative;
bottom: 0;
width: 100%;

 
@media (max-width: 1000px) {
  padding: 70px 30px;
}
`;

export const Container =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px;
margin: 0 auto;
`;

export const Column =styled.div`
display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }

`;

export const FooterLink =styled.a`
color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: gray;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Button =styled.button`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
  display: none;
}
background-color:black;
height:40px;
color:white;
font-weight:bold;

&:hover {
  color: green;
  background-color:white;
  transition: 200ms ease-in;
  
}


`;