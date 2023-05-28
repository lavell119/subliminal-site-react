import React from 'react'
import { useState } from 'react'

export default function Categories() {

  const [categories, setCategories] = useState(['Health', 'Powers', 'Looks', 'Brain', 'Leisure'])

  return (
    <div className="middle_right">
        <h2>Categories</h2>
        <div className="categories_grid">
        {/* {categories.map(category=>
        <div className="category_grid_ele">{category}</div>
  )} */}
        {categories.map((category,index)=>
          
          <div className='category_grid_ele'>

            <a href={`/categories/${index}`}>{category}</a>
          </div>
        )}
        </div>
    </div>
  )
}
