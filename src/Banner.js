import React from 'react'
import styled from 'styled-components'
import Close from '@material-ui/icons/CloseSharp'

function Banner({setbanner,setdata,setpost,idx,setidx}) {
  return (
<Container>
<Flex>
    <h5>
        Create a post
    </h5>
    <Close onClick={()=>{

setbanner(0)
    }}/>
</Flex>

<TextArea onChange={(e)=>{
    setdata(e.target.value)
}} placeholder='What You want to talk about'>

</TextArea>

   <Post onClick={()=>{setbanner(0)
   setpost(1);
   setidx(idx+1);
   }}>

   Post
  
</Post>

</Container>
  )
}

export default Banner

let Container=styled.div`

height:500px;
width:600px;
background:white;
z-index:1;
 position:absolute;
 border-radius:20px;
top:30px;
/* padding:20px; */

`
let Flex=styled.div`
justify-content: space-between;
display:flex;
align-items:center;
h5{
font-size:20px;
color:rgba(0,0,0,0.5)

}
border-bottom:2px solid rgba(0,0,0,0.5);
`
let TextArea=styled.textarea`
width:100%;
outline-width: 0px;;
border:none;
height:100px;
font-size:20px;
`
let Post=styled.button`
position:absolute;
bottom:20px;
right:20px;
background:blue;
color:white;
padding:10px;
font-size:20px;
border-radius:30px;
`