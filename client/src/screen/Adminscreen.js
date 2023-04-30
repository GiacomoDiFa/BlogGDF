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
    async function addPost(ev) {
        ev.preventDefault();
        try {
            console.log(imageUrls);
            const response = await fetch('http://localhost:5000/api/post/addpost', {
                method: 'POST',
                body: JSON.stringify({ title, summary, content, imageUrls }),
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
    async function deletePost(ev){
        ev.preventDefault();
        try{
            console.log(listaPost);
            console.log(fieldNameTitleToDelete);
            console.log(fieldValueTitleToDelete);
            const result = listaPost.find(item=> item[fieldNameTitleToDelete] === fieldValueTitleToDelete);
            console.log(result._id);
            const response = await fetch('http://localhost:5000/api/post/removepost',{
                method: 'POST',
                body: JSON.stringify({_id:result._id}),
                headers: {'Content-Type':'application/json'},
            });
            Swal.fire('Congrats', 'Your New Post Added Succesfully', 'success').then(result => {
                window.location.href = '/';
            });
        }
        catch(error){
            Swal.fire('Oops', 'Something went wrong!', 'error');
        }
    }
    return (
        <>
            <div>
                <h1>Post creation</h1>
                <input type='text' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <input type='text' placeholder='Summary' value={summary} onChange={(e) => { setSummary(e.target.value) }} />
                <input type='text' placeholder='Content' value={content} onChange={(e) => { setContent(e.target.value) }} />
                <input type='text' placeholder='Image Url' value={imageUrls} onChange={(e) => { setImageUrls([e.target.value]) }} />
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                <h1>Post elimination</h1>
                <input type='text' placeholder='Title to delete' value={fieldValueTitleToDelete} name={fieldNameTitleToDelete} onChange={(e)=>{setFieldValueTitleToDelete(e.target.value);setFieldNameTitleToDelete(e.target.name)}}/>
                <button onClick={deletePost}>Delete Post</button>
            </div>
        </>
    )
}

export default Adminscreen