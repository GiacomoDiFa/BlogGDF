import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Adminscreen() {
    const[title,setTitle] = useState('');
    const[summary, setSummary] = useState('');
    const[content, setContent] = useState('');
    const[imageUrls, setImageUrls] = useState([]);
    async function addPost(ev){
        ev.preventDefault();
        try{
            console.log(imageUrls);
            const response = await fetch('http://localhost:5000/api/post/addpost',{
                method:'POST',
                body: JSON.stringify({title,summary,content,imageUrls}),
                headers:{'Content-Type':'application/json'},
            });
            Swal.fire('Congrats', 'Your New Post Added Succesfully','success').then(result => {
                window.location.href='/';
            });
        }
        catch(error){
            Swal.fire('Oops','Something went wrong!','error');
        }
    }
  return (
    <>  
    <h1>Post creation</h1>
    <input type='text' placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <input type='text' placeholder='Summary' value={summary} onChange={(e)=>{setSummary(e.target.value)}}/>
    <input type='text' placeholder='Content' value={content} onChange={(e)=>{setContent(e.target.value)}}/>
    <input type='text' placeholder='Image Url' value={imageUrls} onChange={(e)=>{setImageUrls([e.target.value])}}/>
    <button onClick={addPost}>Add Post</button>
    </>
  )
}

export default Adminscreen