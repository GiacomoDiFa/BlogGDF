import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Link, Navigate } from 'react-router-dom';


function Adminscreen() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [fieldNameTitleToDelete, setFieldNameTitleToDelete] = useState('title');
  const [fieldValueTitleToDelete, setFieldValueTitleToDelete] = useState('');
  const [listaPost, setListaPost] = useState([]);
  const [image, setImage] = useState([]);
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
      const response = await fetch('https://gdfblog.onrender.com/api/post/addpost', {
        method: 'POST',
        body: formData,
      });
      Swal.fire('Congrats', 'Your New Post Added Succesfully', 'success').then(result => {
        <Navigate to={'/'}/>;
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
      const response = await fetch('https://gdfblog.onrender.com/api/post/removepost', {
        method: 'POST',
        body: JSON.stringify({ _id: result._id }),
        headers: { 'Content-Type': 'application/json' },
      });
      Swal.fire('Congrats', 'Your New Post Added Succesfully', 'success').then(result => {
        <Navigate to={'/'}/>;
      });
    }
    catch (error) {
      Swal.fire('Oops', 'Something went wrong!', 'error');
    }
  }
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  return (
    <>
    <header class="masthead" >
                    <div class="container position-relative px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5 justify-content-center">
                            <div class="col-md-10 col-lg-8 col-xl-7">
                            </div>
                        </div>
                    </div>
                </header>
    <br></br><br></br><br></br><br></br><br></br>
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>Post creation</h1>
                <input type='text' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <input type='text' placeholder='Summary' value={summary} onChange={(e) => { setSummary(e.target.value) }} />
                <input type='file' onChange={(e) => { setImageUrls(e.target.files[0].name); setImage(e.target.files[0]) }} />
                <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
                <button onClick={addPost}>Add Post</button>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
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

    </>
  )
}

export default Adminscreen