import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import cooking from "../assets/cooking.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import ChefSection from './ChefSection';
import DeliveryFoodSection from './DeliveryFoodSection';
import { useLoaderData } from 'react-router-dom';
import CaroselSection from './CaroselSection';



const Home = () => {
    const datas = useLoaderData([]);

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://assingment-10-server-abulalajobayar-gmailcom.vercel.app/delivery')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }, [])
    return (

        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='lg:flex items-center gap-10 mb-32'>
                <div className='basis-1/2'>
                    <span className='text-5xl font-bold  text-gray-800 '>Fastest </span>
                    <span className='text-5xl font-bold text-amber-500 '> <br /> Delivery </span>
                    <span className='text-5xl font-bold  text-gray-800 '> &</span>
                    <br />
                    <span className='text-5xl font-bold  text-amber-500 '> Easy</span>
                    <span className='text-5xl font-bold  text-gray-800 '> Pickup.</span>


                    <p className='text-xl mt-7 text-gray-800'>A food restaurant chef creates delicious and visually appealing meals, designs menus, selects ingredients, and supervises kitchen staff. They have a passion for food, an eye for detail, and an ability to work well under pressure.</p>

                    <button className="btn btn-warning text-white font-bold mt-5">Order Now <FaLongArrowAltRight></FaLongArrowAltRight></button>
                </div>
                <div className='basis-1/2'>
                    <Lottie animationData={cooking} loop={true} />
                </div>
            </div>


            <div className='mt-32'>
                <h1 className='text-3xl text-gray-800 font-bold text-center mt-36 '>
                    Our Chef
                </h1>
                <hr className=' w-56 font-bold bg-black h-1 rounded mt-4 text-center mx-auto' />
                <p className='text-center text-base mt-8 mb-8'>Welcome to the "Our Chef" section of our website, where we introduce you to the talented individual or individuals responsible for creating the delicious food you'll enjoy when you visit us. Our head chef or chefs are passionate about their craft and bring a wealth of experience, training, and creativity to the kitchen. They are committed to using the freshest, highest-quality ingredients available and to creating innovative, flavorful dishes that reflect their culinary vision.</p>
            </div>
            <div className='grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-2'>
                {
                    datas.map((data) => <ChefSection key={data.id} data={data}></ChefSection>)
                }
            </div>
            {/* delivery food section */}
            <div className='mt-32'>
                <h1 className='text-3xl text-gray-800 font-bold text-center '>
                    How we can serve you and <br />delivery your favorite food
                </h1>
                <p className='text-center text-base mt-8 mb-8'>We always provide the best service for you and <br />
                    delivery your favorite food to your destination </p>

                <div className='grid gap-6 mb-8 lg:grid-cols-3 '>
                    {data.map(services => <DeliveryFoodSection key={services.id} services={services}></DeliveryFoodSection>)}
                </div>
            </div>

            {/* carosel-Section */}
            <div  className='mt-32 mb-16'>
                <CaroselSection></CaroselSection>
            </div>

        </div>



    );
};

export default Home;