import React from 'react';
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefSection = ({ data }) => {
    const { id,chef_name,chef_picture,like,number_of_recipes,years_of_experience} = data
    
    return (
        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='object-cover w-full h-56 rounded' src={chef_picture} alt="picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{chef_name}</h2>
                    <div className='flex gap-2'>
                    <p className='text-base font-bold text-amber-700'>{years_of_experience}  Years of experience</p>
                    <p className='text-amber-700 text-base font-bold '> {number_of_recipes} of recipes</p>
                    </div>
                    <p className='flex items-center text-amber-700 text-base font-bold'>Likes {like}</p>

                    <div className="card-actions justify-center w-full items-end">
                        <Link to={`../${id}`} className="w-full">
                        <button  className="btn  w-full">View Recipe <FaArrowRight className='font-bold ml-2'></FaArrowRight></button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>

    );
};

export default ChefSection;