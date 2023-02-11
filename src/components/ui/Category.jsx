import React from 'react'

const Category = ({category : {id,title,image} }) => {
    return (
        <div>
            <a href="." className='flex flex-col items-center text-center p-4 hover:bg-purple-100 rounded hover:text-regal-blue group'>
                <img src={image} alt={title} width={48} className="group-hover:scale-125 duration-500 rounded"  />
                <span className='mt-4'>{title}</span> 
            </a>
        </div>
    )
}

export default Category
