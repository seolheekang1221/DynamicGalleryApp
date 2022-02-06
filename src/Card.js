import React from 'react';

const Card = ({ images }) => {
    return(
        <>
            {images.map((images, Index) => (
                <div 
                className="card"
                key={Index}
                style={{ background: 'url("${img.url}") no-repeat center/cover' }}
                ></div>
            ))}
        </>
    );
};

export default Card;

