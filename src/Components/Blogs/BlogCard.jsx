import React from 'react';
import test from '../../assets/images/1.jpg';
import test2 from '../../assets/images/boy1.png';


const BlogCard = ({blog,handleBookmark,handleReadTime}) => {
    // console.log("blogcard",handleBookmark)
    const {title,author_name,banner_img,author_img,read_time,posted_time,tags} = blog
    return (
        <div className='space-y-4 border-b pb-5 mb-5'>
            <div className='h-[400px]'>
                <img className='w-full h-full  rounded-lg ' src={banner_img} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img className='w-12 md:w-16' src={author_img} alt="" />
                    <div>
                        <p className='md:text-lg text-base lg:text-2xl font-semibold'>{author_name}</p>
                        <p>{posted_time}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='font-semibold text-black/60'><span>{read_time}</span> min read</p>
                    <span onClick={()=>handleBookmark(blog)} className='ml-2 focus:text-red-900 cursor-pointer text-2xl text-black/60'><ion-icon name="bookmark-outline"></ion-icon></span> 
                </div>
            </div>
            <p className='text-3xl font-bold'>{title}</p>
            <div>
                {
                    tags.map((tag,i) => <span key={i} className='text-black/40 font-bold mr-3'>#{tag}</span>)
                }
            </div>
            <div>
            <span onClick={()=>handleReadTime(read_time)} className='text-purple-800 font-bold underline cursor-pointer hover:text-purple-500 duration-200' href="">Mark as Read</span>

            </div>
        </div>
    );
};

export default BlogCard;