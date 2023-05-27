import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Postscreen() {
    let { id } = useParams();
    const [post, setPost] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/post/getpostbyid', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id})
                });
                const data = await response.json();
                console.log(id);
                console.log(data);
                setPost(data);
            }
            catch (error) {
            console.log(error);
        }
    }
        getData();
}, []);
return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      )}
    </div>

)
}

export default Postscreen