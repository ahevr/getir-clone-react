import React, { useEffect,useState } from 'react'
import Category from './ui/Category'
import categoryData from 'api/categories.json'
const Categories = () => {

    const [categories,setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoryData)
    })

    return (
        <div className='container mx-auto py-4'>
            <h2 className='text-bold'>Kategoriler</h2>
            <div className="grid grid-cols-10">
                {categories && categories.map((category,index) => <Category key={index} category={category} />)   }
            </div>
        </div>
    )
}

export default Categories
