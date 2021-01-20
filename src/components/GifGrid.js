import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGifs';
import PropTypes from 'prop-types'

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);
    const {data:images,  loading } = useFetchGifs( category );

    return (
        <>
        <h3 className="card-grid animate__animated animate__fadeIn">{ category }</h3>
        <div className="card-grid animate__animated animate__fadeIn">
           { loading && <p className="animate__animated animate__flash">Loading</p>}
            {
                images.map( img  => (
                    <GifGridItem 
                    key = { img.id }
                    { ...img }/>
                    ))
                }
           
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
