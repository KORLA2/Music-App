import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import Feed  from './Feed'
import News from './News'
function Body() {
  return (
   <Container>
<Profile/>
<Feed/>
<News/>
   </Container>
  )
}

export default Body
let Container=styled.div`
padding:20px;
display:grid;
grid-template-columns: 2fr 3fr 2fr;
grid-column-gap:20px;
margin:60px;
`