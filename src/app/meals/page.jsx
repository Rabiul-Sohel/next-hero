import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css'
import { Poppins } from 'next/font/google';

export const metadata = {
    title: "Meals",
    description: "Super Delicious food",
    keywords: ['foods', "delicious foods", "traditional foods"]
  };
  const poppins = Poppins({
    weight:["400", "600", "800"],
    subsets: ['latin']
  })

const MealsPage = () => {

    return (
        <div className={`${poppins.className} p-12`}>
            <h2 className='text-red-500 font-semibold text-3xl'>Choose your meals</h2>
            <p className={styles.text_red}>choose what you want</p>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;