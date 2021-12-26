

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategorias( [...categorias, 'HunterXHunter'] );
    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories = { setCategorias }
            />
            <hr/>
            
            <ol>
                {
                    categorias.map( categoria => (
                        <GifGrid 
                            category={ categoria }
                            key = { categoria}    
                        /> 
                    ))
                }
            </ol>
        </>
    )
}
