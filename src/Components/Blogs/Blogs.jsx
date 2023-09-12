import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = ({handleBookmark,handleReadTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='col-span-full md:col-span-2 order-2 md:order-1'>
            {
                blogs.map(blog => <BlogCard handleBookmark={handleBookmark} handleReadTime={handleReadTime} blog={blog} key={blog.id}/>)
            }
        </div>
    );
};

export default Blogs;