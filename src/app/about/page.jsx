import React from 'react';

const getTime = async() =>{
    const res = await fetch('http://localhost:3000/time',{next: {revalidate: 5}} ) //{cache: 'no-store'}
    const data = await res.json()
    return data.currentTime
}

const page =async() => {
    const time =await getTime()
    // console.log(getTime());
    console.log(time);
    return (
        <div>
            About page
            <h4>Time: {time} </h4>
        </div>
    );
};

export default page;