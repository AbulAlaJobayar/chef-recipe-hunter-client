import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const data = useLoaderData({});
    console.log(data)
    const { id, chef_name, chef_picture, like, number_of_recipes, years_of_experience, short_bio } = data
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-28 mb-20'>
            <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2 ">
                <figure><img src={chef_picture} alt="Chef image" className='object-cover h-96' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{chef_name}</h2>
                    <p>{short_bio}</p>
                    <div className=' gap-2'>
                    <p className='text-base font-bold text-amber-700'>{years_of_experience}  Years of experience</p>
                    <p className='text-amber-700 text-base font-bold '> {number_of_recipes} of recipes</p>
                    </div>
                    <p className='flex items-center text-amber-700 text-base font-bold'>Likes {like}</p>
                    <div className="card-actions ">
                       <Link className='w-full' to='/'> <button className="btn btn-primary w-full">Back To Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;