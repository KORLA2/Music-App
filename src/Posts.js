import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import {Avatar} from '@material-ui/core'
import Like from '@material-ui/icons/ThumbUpAltOutlined'
function Posts({title}) {
  return (
    <Container>
<Flexy>
<Avatar />
<a href="#">Mouse</a>
</Flexy>

      {title}

      <Flex>
        <Icon title="Like" Icon={Like} />
        <Icon title="Like" Icon={Like} />
        <Icon title="Like" Icon={Like} />
        <Icon title="Like" Icon={Like} />
      </Flex>
    </Container>
  );
}

export default Posts
let Container=styled.div`
background:white;
margin:30px;
padding:20px;
border-radius:10px;
`
let Flex=styled.div`
display:flex;
margin:20px;
justify-content: space-between;
align-items:center;

`
let Flexy = styled.div`
  align-items: center;
  display: flex;
  margin:20px;
  a{
    color:black;
    &:hover{
        color:blue;
    }
  }
`;