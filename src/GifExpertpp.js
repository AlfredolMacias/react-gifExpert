import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertpp = ( {defaultCategories = []}) => {

    
    const [categories, setCategories] = useState( defaultCategories );
    return (
        <>
            <h2>GifExpertpp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr />

            {/* <button onClick= { handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                            <GifGrid
                                key = { category } 
                                category = { category } />
                        )
                    )
                }
            </ol>
        </>
    );
}