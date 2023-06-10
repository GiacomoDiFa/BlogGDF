import React, { useEffect, useState } from 'react'
import PostComponent from '../component/PostComponent';
import blogphoto from '../assets/images/blog.jpg'
import Loader from '../component/Loader';

function Homescreen() {
  const [listaPost, setListaPost] = useState([]);
  const[loading,setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const url = "https://gdfblog.onrender.com/api/post/getallpost";
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setListaPost(data);
        setLoading(false);
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
        <img className='imgback' src={blogphoto} alt='blogphoto'></img>
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>GDF Blog</h1>
                <span class="subheading">A Blog by Giacomo Di Fabrizio</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            {/*Pager*/}
            {loading?(<Loader/>) : listaPost.slice().reverse().map((post) => (<PostComponent key={post._id} id={post._id} title={post.title} summary={post.summary} content={post.content} imageurls={post.imageUrls[0]} />))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Homescreen