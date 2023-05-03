import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import cooking from "../assets/cooking.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import ChefSection from './ChefSection';
import { Container } from 'postcss';


const Home = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setDatas(data))
            .catch(err => console.error(err))
    }, [])
    return (

        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='lg:flex items-center gap-10'>
                <div className='basis-1/2'>
                    <span className='text-3xl font-bold  text-gray-800 '>Indulge in a Culinary Journey at</span>
                    <span className='text-5xl font-bold text-amber-500 '> <br /> Damn Delicious</span><br />
                    <span className='text-3xl font-bold  text-gray-800 '>Where Taste Meets Tradition</span>


                    <p className='text-xl mt-3'>A food restaurant chef creates delicious and visually appealing meals, designs menus, selects ingredients, and supervises kitchen staff. They have a passion for food, an eye for detail, and an ability to work well under pressure.</p>

                    <button className="btn btn-warning text-white font-bold mt-5">Order Now <FaLongArrowAltRight></FaLongArrowAltRight></button>
                </div>
                <div className='basis-1/2'>
                    <Lottie animationData={cooking} loop={true} />;
                </div>
            </div>
            <div>
            {
                    datas.map((data)=><ChefSection key={data.id}  data={data}></ChefSection>)
                 }
            </div>

        </div>



    );
};

export default Home;