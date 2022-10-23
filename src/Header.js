import React from 'react'
import styled from 'styled-components'
import  Search from '@material-ui/icons/SearchRounded'
import Home from '@material-ui/icons/HomeSharp'
import ImageIcon from "@material-ui/icons/Image"
import   Icon from './Icon'
import Thumb from "@material-ui/icons/ThumbDownAltOutlined";

import Create from "@material-ui/icons/Create";

function Header() {
  return (
    <Head>
      <Left>
        <img src="/link.jpg" alt="" />
        <Search />
        <input type="text" />
      </Left>
      <Right>
        <Icon title="Image" Icon={ImageIcon} />
        <Icon title="Home" Icon={Home} />
        <Icon title="Search" Icon={Search} />
        <Icon title="Home" Icon={Create} />
        <Icon title="Home" Icon={Thumb} />
      </Right>
    </Head>
  );
}

export default Header
let Head=styled.div`
height:60px;
background:white;
width:100%;
display:flex;
position:fixed;
top:0px;
left:0px;
right:0px;
justify-content:space-evenly;
`
let Left = styled.div`
  display: flex;
  align-items: center;
  img{
height:40px;
object-fit:contain;
  }
  input {
    background: rgb(192, 187, 187, 0.3);
    border: 2px solid blue;
    padding: 10px;
    margin-left:10px;
    flex:1;
    font-size: 20px;
    outline-width: 0;
  }
`
let Right=styled.div`
display:flex;
align-items:center;

`