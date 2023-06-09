import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
function Postscreen() {
    let { id } = useParams();
    const [post, setPost] = useState();
    const [imageUrl,setImageUrl] = useState('');
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/post/getpostbyid', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id })
                });
                const data = await response.json();
                console.log(id);
                console.log(data);
                setPost(data);
                const imageFileName = data.imageUrls[0];
                const finalImageUrl = require(`../${imageFileName}`);
                console.log(data.imageUrls[0]);
                setImageUrl(finalImageUrl);
            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);
    return (
        <>
        {post&&(   
            <div>
            <header className="masthead">
                <img className='imgback' src={post.imageUrls[0]}></img>
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="post-heading">
                                <h1>{post.title}</h1>
                                <h2 class="subheading">{post.summary}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*<!-- Post Content-->*/}
            <article class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </article>
            </div>)}
        </>
    )
}

export default Postscreen