import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function ProductImage (props) {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        if(props.detail.images && props.detail.images.length > 0) {
            let images = [];
            props.detail.images.map(item => {
                images.push({
                    original: `https://tripus-server.herokuapp.com/${item}`,
                    thumbnail: `https://tripus-server.herokuapp.com/${item}`,
                })
            })
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
            <ImageGallery items={images} />
        </div>
    )
};

export default ProductImage;