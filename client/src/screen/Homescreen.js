import React, { useEffect, useState } from 'react'
import PostComponent from '../component/PostComponent';

function Homescreen() {
  const [listaPost, setListaPost] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = "https://gdfblog.onrender.com/api/post/getallpost";
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setListaPost(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      {/*<!-- Page Header-->*/}
      <header class="masthead" >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>Clean Blog</h1>
                <span class="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            {/*Pager*/}
            {listaPost.slice().reverse().map((post) => (<PostComponent key={post._id} id={post._id} title={post.title} summary={post.summary} content={post.content} imageurls={post.imageUrls[0]} />))}
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Homescreen