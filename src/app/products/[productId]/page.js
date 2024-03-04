import React from 'react';

const DynamicProductPage = ({params, searchParams}) => {

    console.log(params);
    console.log(searchParams);
    return (
        <div>
            <h1>DynamicProductPage {params.productId}</h1>
        </div>
    );
};

export default DynamicProductPage;