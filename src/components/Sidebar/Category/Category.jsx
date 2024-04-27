import React from 'react'
import './Category.css'


export const Category = () => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>All</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Art</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>T-shirts</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Pillows</span>
        </label>
      </div>
    </div>
  )
}
