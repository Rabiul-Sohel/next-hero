import React from 'react';

const getPostDetails = async(id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}
export const generateMetadata = async({params})=>{
    const postData =await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await postData.json()
     
      return {
        title: {
            absolute: `${post.title}`},
        description: post.body.slice(),
        keywords: post.body.split(' ')
      }
}
const page = async({params}) => {
    const id = params.id
    const {title, body} = await getPostDetails(id) 
    
    // console.log(singlePost);
    return (
        <div>
            <h4 className='font-bold'> Title:  {title} </h4>
            <p> Description: {body} </p>
        </div>
    );
};

export default page;