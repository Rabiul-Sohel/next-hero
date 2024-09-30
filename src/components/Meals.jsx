"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('a')
    const [meals, setMeals] = useState([])
    const [error, setError] = useState('')
   
   const loadData = async() =>{
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
    
    
    const data = await res?.json()
    setMeals(data.meals)
    setError('')
    } catch (error) {
        setError(error.message)
    //    console.log(error.message); 
    }
    
   }
   
//    const 
useEffect(()=>{   
    loadData()
},[])
console.log(meals);

   return (
        <div>
            <input onChange={(e)=> setSearch(e.target.value)} className='mt-5 p-3 outline-none border-none text-slate-800' type="text" placeholder='Search your meal' />
            <button onClick={loadData}  className='p-3 bg-red-500'>Search</button>
            <div className='grid grid-cols-3'>
                {
                    meals.length > 0 && !error && meals.map(meal =>(
                        <div className='border-2 my-2' key={meal.idMeal}>
                            <Image width={500} height={500} src={meal.strMealThumb} alt={meal.strMeal}/>
                            <h2 className='text-2xl text-red-500'> {meal.strMeal} </h2>
                            <p> {meal.strInstructions} </p>
                        </div>
                    ))
                }
                {
                    error && <h6>No data found</h6>
                }
            </div>
        </div>
    ); //onClick={loadData} 
};

export default Meals;