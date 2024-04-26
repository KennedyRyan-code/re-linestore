import React from 'react'
import './Recommended.css'

export const Recommended = () => {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-btns'>
        <button className='btns'> All Merchandise </button>
        <button className='btns'> Art </button>
        <button className='btns'> T-shirts </button>
        <button className='btns'> Pillows </button>
        <button className='btns'> Stickers </button>
      </div>
    </div>
  )
}
