import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "framer-motion" // Corrected import for motion
import BlogCard from './BlogCard'

const BlogList = () => {
    const [menu, setMenu] = useState("All")

  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((item)=> (
                <div key={item} className='relative'>
                    <button onClick={()=> setMenu(item)} className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}>
                        {item}
                        {menu === item && (
                            <motion.div layoutId='underline' transition={{type: 'spring',stiffness: 500, damping: 30}} className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'></motion.div>
                        )}
                    </button>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
            {blog_data
                // Corrected filter logic: Pass 'blogItem' to the callback
                .filter((blogItem) =>
                    // If menu is "All", show all. Otherwise, check blogItem's category.
                    menu === "All" ? true : blogItem.category === menu
                )
                // Corrected map logic: Pass 'blogItem' to the callback
                .map((blogItem) =>
                    // Use blogItem to pass props to BlogCard
                    <BlogCard key={blogItem._id} blog={blogItem} />
                )}
        </div>
    </div>
  )
}

export default BlogList