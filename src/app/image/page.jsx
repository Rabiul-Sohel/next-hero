import Image from 'next/image';
import React from 'react';

const ImageGallery = () => {
    return (
        <div>
            <Image src='/travel.jpg' alt=""  width={1920} height={1080} />
        </div>
    );
};

export default ImageGallery;