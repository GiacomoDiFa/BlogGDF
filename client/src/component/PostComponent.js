import React from 'react'

function PostComponent({id,title,summary,content,imageurls}) {
  return (
    <>
    <div>{id}</div>
    <div>{title}</div>
    <div>{summary}</div>
    <div>{content}</div>
    <div>{imageurls}</div>
    </>
  )
}

export default PostComponent