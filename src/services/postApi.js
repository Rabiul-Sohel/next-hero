// import { redirect } from "next/dist/server/api-utils"

import { redirect } from "next/navigation"

export const  getPosts = async()=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await response.json()
    // if(data) {
    //     redirect(`/post/${data[0].id}`)
    // }
    return data
}