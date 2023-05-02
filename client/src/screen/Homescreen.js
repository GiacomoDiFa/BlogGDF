import React, { useEffect, useState } from 'react'
import PostComponent from '../component/PostComponent';

function Homescreen() {
  const[listaPost,setListaPost] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
      const url = "http://localhost:5000/api/post/getallpost";
      try{
        const resp = await fetch(url);
        const data = await resp.json();
        setListaPost(data);
      }
      catch(error){
        console.log(error);
      }
    }
    getData();
  },[]);

  return (
    <>
    {listaPost.map((post)=>(<PostComponent key={post._id} id={post._id} title={post.title} summary={post.summary} content={post.content} imageurls={post.imageUrls[0]}/>))}
    </>
  )
}

export default Homescreen