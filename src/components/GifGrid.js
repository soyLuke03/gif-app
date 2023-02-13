import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getFifs'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);


    // useEffect( ()=>{
    //     getGifs( category )
    //     /* Cuando el .then llama a una funcion que tiene por parámetro
    //     el mismo parámetro que usa se puede simplificar */
    //     .then( (gifs) => setImages(gifs) /* setImages */)
    // },[])

    // const getGifs = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=jc97OEt33W0eXvGQ9OxkdxT2F8WDnzXq&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();
    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })
    //     setImages(gifs)
    //     console.log(gifs)
    // }
         
    
    // getGifs()
        


    return (
        <>
            <h3> {category} </h3>
            { loading && <span class="loader"></span>}
            <div className='card-grid'>
                                {
                    images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
                
            </div>
        </>

    )
}
