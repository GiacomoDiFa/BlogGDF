import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

function Adminscreen() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [fieldNameTitleToDelete, setFieldNameTitleToDelete] = useState('title');
  const [fieldValueTitleToDelete, setFieldValueTitleToDelete] = useState('');
  const [listaPost, setListaPost] = useState([]);
  const [image,setImage] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/api/post/getallpost";
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
  async function addPost(ev) {
    ev.preventDefault();
    try {
      console.log(imageUrls.toString());
      const formData = new FormData();
      formData.append('image', image);
      formData.append('imageUrls', imageUrls);
      formData.append('title', title);
      formData.append('summary', summary);
      formData.append('content', content);
      const response = await fetch('http://localhost:5000/api/post/addpost', {
        method: 'POST',
        body: formData,
      });
      Swal.fire('Congrats', 'Your New Post Added Succesfully', 'success').then(result => {
        window.location.href = '/';
      });
    }
    catch (error) {
      Swal.fire('Oops', 'Something went wrong!', 'error');
    }
  }
  async function deletePost(ev) {
    ev.preventDefault();
    try {
      console.log(listaPost);
      console.log(fieldNameTitleToDelete);
      console.log(fieldValueTitleToDelete);
      const result = listaPost.find(item => item[fieldNameTitleToDelete] === fieldValueTitleToDelete);
      console.log(result._id);
      const response = await fetch('http://localhost:5000/api/post/removepost', {
        method: 'POST',
        body: JSON.stringify({ _id: result._id }),
        headers: { 'Content-Type': 'application/json' },
      });
      Swal.fire('Congrats', 'Your New Post Added Succesfully', 'success').then(result => {
        window.location.href = '/';
      });
    }
    catch (error) {
      Swal.fire('Oops', 'Something went wrong!', 'error');
    }
  }
  return (
    <>
      <header class="masthead" >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>Post creation</h1>
                <input type='text' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <input type='text' placeholder='Summary' value={summary} onChange={(e) => { setSummary(e.target.value) }} />
                <input type='text' placeholder='Content' value={content} onChange={(e) => { setContent(e.target.value) }} />
                <input type='file' onChange={(e) => { setImageUrls(e.target.files[0].name); setImage(e.target.files[0]) }} />
                <button onClick={addPost}>Add Post</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header class="masthead" >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>Post elimination</h1>
                <input type='text' placeholder='Title to delete' value={fieldValueTitleToDelete} name={fieldNameTitleToDelete} onChange={(e) => { setFieldValueTitleToDelete(e.target.value); setFieldNameTitleToDelete(e.target.name) }} />
                <button onClick={deletePost}>Delete Post</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Adminscreen