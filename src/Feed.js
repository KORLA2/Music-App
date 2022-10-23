import { Avatar, CardContent } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Photo from '@material-ui/icons/Photo'
import {database} from './firebases'
import Banner from './Banner'
import Posts from './Posts'
import { collection ,addDoc  ,getDocs, Timestamp }  from 'firebase/firestore'
import Video from '@material-ui/icons/PhotoAlbumOutlined'
import Event from '@material-ui/icons/PhotoAlbumOutlined'
import Article from '@material-ui/icons/PhotoAlbumOutlined'
import ConIcon  from './ConIcon'

import  firebase  from "firebase/compat/app"

function Feed() {
  let [posts,setposts]=useState([]);
let [idx,setidx]=useState(0)
  let [data,setdata]=useState('');
  let [post, setpost] = useState(0);
  
  let [banner,setbanner]=useState(0);

  useEffect(()=>{

    let Feed=  collection(database,'Feed')

let getFeed=async ()=>{


    let pos = await getDocs(Feed)
    
    setposts(
      pos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

}

getFeed();

if(post) {addDoc(Feed,{data});
setpost(0)
}
},[idx])

useEffect(()=>{},[])

  return (
    <div>{

    banner===0?'':<Banner setbanner={setbanner} setdata={setdata} setpost={setpost} idx={idx} setidx={setidx}/>
    }
      <Container>
        <Content>
          <Avatar />
<button onClick={()=>{

setbanner(1);

}}>

  Ask Your Network
</button>
        </Content>
        <Content>
          <ConIcon title="Photo" Icon={Photo} />
          <ConIcon title="Photo" Icon={Photo} />
          <ConIcon title="Photo" Icon={Photo} />
          <ConIcon title="Photo" Icon={Photo} />
        </Content>
      </Container>
<div>
{

  posts?.map((e)=>(

    <Posts title={e.data}/>

  ))
}
      
</div>
    </div>
  );
}

export default Feed
let Container=styled.div`
background:white;
border-radius:10px;
padding:20px;
margin:20px;
border-bottom:2px solid rgba(0,0,0,0.2);
`

let Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  align-items: center;
  height: 60px;
button{    outline-width: 0px;
    width: 100%;
    height: 60px;

    font-size: 20px;
    border-radius: 50px;
    color:rgba(0,0,0,0.6)
  }
`;