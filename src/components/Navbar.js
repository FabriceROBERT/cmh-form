import React from 'react'
import Button from './Button'
import Profile from '../assets/svg/ProfileIcon.svg'

function Navbar() {
  return (
    <div className='w-screen bg-white py-2 shadow-xl flex justify-around text-md  text-black '>
      <div className='flex flex-row justify-evenly content-center items-center'>
      <div className='cursor-pointer'>
        <img className='pb-2 mr-10 h-16 w-16' src='https://commemyhome.fr/wp-content/uploads/2023/05/IMG_1979-removebg-preview.png' alt='cmh_logo'/>
      </div>
      
      <div className='flex flex-row cursor-pointer gap-10'>
      <span>Nos services</span>
      <span>A propos</span>
      <span>Conseil et actualités</span>
      <span>Devenir City Manager</span>
      </div>

      </div>
      <div className='ml-10 flex gap-4 items-center'>
        
      <img src={Profile} className='h-7 w-7' alt='profile_user' />
      <Button>Connexion</Button>
      <Button theme='primary'>Confier mon bien</Button>
      </div>
    
    </div>
  )
}

export default Navbar
