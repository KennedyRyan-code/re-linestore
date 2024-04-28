import React from 'react'
import './Recommended.css'

export const Recommended = () => {
  return (
    <div>
      <h2 className='recommended-title'>Trending</h2>
      <div className='recommended-btns'>
        <button className='btns'> All Trends  </button>
        <button className='btns'> Wine </button>
        <button className='btns'> Whisky </button>
        <button className='btns'> Gin </button>
        <button className='btns'> Vodka </button>
        <button className='btns'> Beer </button>
      </div>
    </div>
  )
}
