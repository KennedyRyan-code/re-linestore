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
          <span className='checkmark'>Wine</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Gin</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Whisky</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Vodka</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Beer</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Tequila</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Rum</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Liqueur</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Cognac</span>
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test' />
          <span className='checkmark'>Brandy</span>
        </label>
      </div>
    </div>
  )
}
