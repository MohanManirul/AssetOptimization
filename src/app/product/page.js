import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <p>Product page</p>

            
            <Image 
                alt='Phone'
                width={200}
                height={300}
                src="https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg?w=300"
            />


            <Image 
                alt='Phone'
                width={200}
                height={300}
                src="https://m.media-amazon.com/images/I/71BcNVNnJDL._AC_SL1500_.jpg"
            />



        </div>
    );
};

export default page;