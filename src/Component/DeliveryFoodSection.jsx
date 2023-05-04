import React, { useEffect, useState } from 'react';

const DeliveryFoodSection = ({ services }) => {
    console.log(services);
    const { id, img, title, description } = services
    return (
        < >
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt="picture" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title  mx-auto text-xl font-bold">{title}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>

        </>
    );
};

export default DeliveryFoodSection;