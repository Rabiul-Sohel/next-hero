import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';
import './styles.module.css'
import { redirect } from 'next/navigation';
export const metadata ={
    title: {
        absolute: "Post"
    },
    description: " All valueable post here"
}
//  const  getPosts = async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     if(data) {
//         redirect(`/post/${data[0].id}`)
//     }
//     return data
// }
const PostPage = async() => {
    const posts = await getPosts()
    // console.log(posts);
    return (
        <div className='grid grid-cols-4 gap-4 '>
           {
            posts?.slice(0,20).map(({id, title, body}) => (
                <div className='border card' key={id}>
                    <h4 className='title'>Title: {title} </h4>
                    <p>Description: {body} </p>
                    <button> <Link className='bg-cyan-500 px-4 py-2' href={`/post/${id}`}>See Details</Link> </button>
                </div>
            ))
           }
        </div>
    );
};

export default PostPage;