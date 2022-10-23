import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
function Profile() {
  return (
    <Container>
      <Top>
        <Banner></Banner>
        <Avatar className='avatar' />
        <a href="">Welcome ,There !</a>
        <a href=""> Add a photo!</a>

        <Mid>
          <Flex>
            <p> Connections</p>
            <h5>37</h5>
          </Flex>
          <Flex>
            <p> Who's viewed my profile</p>
            <h5>37</h5>
          </Flex>
        </Mid>
<Items>
    <h6>My items</h6>
</Items>

      </Top>
    </Container>
  );
}

export default Profile
let Container=styled.div`
background:white;
height:500px;
border-radius:10px;
`
let Top = styled.div`
.avatar{

    /* margin-top:-30px; */

}

`;
let Mid = styled.div`
border:2px solid rgba(0,0,0,0.2);
margin:4px;
border-left:none;
border-right:none;
`
let Items = styled.div`
height:10px;

`

let Banner = styled.div`

background:green;
height:50px;

`;
let Flex = styled.div`
display:flex;
justify-content:space-around;;
`;