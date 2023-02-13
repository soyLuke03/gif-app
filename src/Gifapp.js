import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
    // const categories = ['Honda', 'Kawasaki', 'Yamaha'];
    const [categories, setCategories] = useState(['Honda']);

    // const handleAdd=()=>{
    //     // categories.push('Suzuki');
    //     console.log(categories)
    //     setCategories([ ...categories, 'Suzuki'])
    //      setCategories( cats => [ ...cats, 'Suzuki'])
    // }
  return (
    <>
        <h2>GifApp</h2>
        <hr />
        <AddCategory setCategories={setCategories}/>
        
            {
                categories.map((category) =>
                  <GifGrid
                    key={category}
                    category={category} />
                
                )
            }
        
        
    </>
  )
}
