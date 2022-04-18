import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='flex justify-center mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                <div className='w-3/4 h-3/4 shadow-lg bg-white flex flex-col items-center rounded-xl p-10'>
                    <div className='w-full px-4'>
                        <h2 className='text-2xl font-semibold mt-4 text-center'>Questions:</h2>
                        <h3 className='text-lg font-semibold mt-4'>
                            1. Difference between authorization and authentication. :
                        </h3>
                        <h4 className='text-lg mt-2'> <span className='font-semibold'>
                            Answer: </span> i.must not protected route ii.answer all iii.must 3-5 line and own words. bangla/english as wish,
                        </h4>
                        <h3 className='text-lg font-semibold mt-4'> 2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <h4 className='text-lg mt-2'> <span className='font-semibold'>Answer: </span> i.must not protected route ii.answer all iii.must 3-5 line and own words. bangla/english as wish, </h4>
                        <h3 className='text-lg font-semibold mt-4'>3. What other services does firebase provide other than authentication </h3>
                        <h4 className='text-lg mt-2'> <span className='font-semibold'>Answer: </span> i.must not protected route ii.answer all iii.must 3-5 line and own words. bangla/english as wish, </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;