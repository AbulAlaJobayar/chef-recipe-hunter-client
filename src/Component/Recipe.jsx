import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Recipe = ({ recipe }) => {
    const [isDisabled, setDisabled] = useState(false);
    const handleSubmit = () => {
        console.log('Your button was clicked and is now disabled');
        if (!isDisabled) {
            toast('Favorite.');
            setDisabled(true);
        }

    }


    const {  name, image, method } = recipe;
    console.log(recipe)
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-56 h-56 rounded-full ' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{method}</p>

                <div className='mt-3'>
                    <span className='flex items-center text-amber-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>

                    </span>

                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary" onClick={handleSubmit} disabled={isDisabled} >Favorite</button>

                </div>
            </div>
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#0D392F',
                        backgroundColor:'#33FFB8',
                        fontWeight:'bold',
                    },
                }}
            />
        </div>
    );
};

export default Recipe;