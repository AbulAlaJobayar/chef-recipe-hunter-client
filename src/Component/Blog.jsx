import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div>
                <h1 className='text-3xl font-bold text-gray-800'>The differences between uncontrolled and controlled components.</h1>
                <h3 className='text-2xl font-bold text-gray-800 mt-4'>//Uncontrolled components//</h3>
                <p className='text-base font-bold '>An uncontrolled component is a component that renders form elements,
                    where the form element's data is handled by the DOM (default DOM behavior).
                    To access the input's DOM node and extract its value you can use a ref.</p>
                    <h3 className='text-2xl font-bold text-gray-800 mt-4'>//Controlled components//</h3>
                    <p></p>

            </div>
        </div>
    );
};

export default Blog;