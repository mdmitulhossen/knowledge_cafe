import React from 'react';

const Bookmarks = ({ bookmark,readTime }) => {

    return (
        <div className='col-span-full md:col-span-1 order-1 md:order-2'>
            <div className='bg-[#6047EC]/10 border border-[#6047EC] py-5 px-10 rounded-md'>
                <p className='text-[#6047EC] text-xl md:text-md xl:text-xl font-semibold'>Spent time on read : {readTime} min</p>
            </div>

            <div className='bg-gray-200 rounded-md px-7 mt-5 py-4'>
                <p className='text-2xl md:text-md xl:text-2xl font-bold'>Bookmarked Blogs : <span>{bookmark.length}</span></p>

                {
                    bookmark.map((mark, i) => {
                        return (
                            <div key={i} className='bg-white p-5 rounded-md mt-4'>
                                <p className='font-bold text-sm'>{mark?.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Bookmarks;