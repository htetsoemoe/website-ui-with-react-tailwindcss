import React from 'react'
import { faker } from '@faker-js/faker';
import { BsList, BsSearch, BsCart4 } from 'react-icons/bs'
import { AiOutlineLogin } from 'react-icons/ai'

import logo from './assets/logo.jpg'
import coffeeBean from './assets/coffee-bean.jpg'

const App = () => {

  const menuClass = `p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500 hover:-translate-y-1`
  const menuClassActive = `p-2 pl-5 pr-5 bg-gray-200 rounded-lg hover:ease-in-out duration-500 hover:-translate-y-1`
  const isActive = true
  const currentColor = '#03C9D7'


  return (
    <div className="bg-gray-50 text-slate-900">
      <div className="container mx-auto transform duration-500">
        <div id="home" className="pl-4 pr-4 pt-5 pb-10">
          <div className="flex justify-between items-center align-middle">
            <div className='flex items-center gap-3'>
              <span className='text-2xl cursor-pointer hover:bg-gray-200 p-2 rounded-full hover:ease-in-out duration-500'>
                <BsList />
              </span>
              <img src={logo} className='w-10 h-10 rounded-full' alt="coffee-shop-logo" />
              <p className="text-[20px] uppercase font-bold">Coffee Place</p>
            </div>
            {/* If screen is large size menu will display flex, other screen size menu will hidden. */}
            <div className='font-bold lg:flex hidden gap-2'>
              <div className={menuClassActive}>
                <a href="#home"
                  style={{ color: isActive ? currentColor : '' }}>Home</a>
              </div>
              <div className={menuClass}>
                <a href="#menu">Menu</a>
              </div>
              <div className={menuClass}>
                <a href="#product">Product</a>
              </div>
              <div className={menuClass}>
                <a href="#blog">Blog</a>
              </div>
              <div className={menuClass}>
                <a href="#about">About</a>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='text-2xl p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer'>
                <BsSearch />
              </div>
              <div className='text-2xl p-2 rounded-full hover:bg-gray-200 
                  hover:ease-in-out duration-500 cursor-pointer relative inline-flex'>
                <BsCart4 />
                <div className='absolute -top-0 -right-1 h-4 w-5 text-xs
                  text-center text-white bottom-1 rounded-full'
                  style={{ background: currentColor }}>
                  <p>7</p>
                </div>
              </div>
              <div className='text-2xl p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer'>
                <AiOutlineLogin />
              </div>
            </div>
          </div>
        </div>
        <div id="hero" className='pl-5 pr-5'>
          <div className="transform duration-500 hover:shadow-2xl hover:-translate-y-1 relative">
            <img className="xl:max-w-6xl" src={coffeeBean} alt="" />
            <div className="bg-white md:p-12 p-12 pt-8 lg:max-w-3xl w-full lg:absolute top-48 right-5 shadow-2xl">
              <div className="flex justify-between font-bold text-sm">
                <p>Coffee From Heaven</p>
                <p>{faker.date.past().getFullYear()}</p>
              </div>
              <h3 className="text-5xl font-bold mt-4 md:mt-10 uppercase">
                Coffee From Heaven
              </h3>
              <p className="pt-5">
                {faker.lorem.sentences()}
              </p>
              <p className="p-3">
                <button className='p-3 w-60 text-white font-bold rounded-full transform duration-500 hover:-translate-y-1'
                  style={{background: currentColor}}>
                  Register Now
                </button>
              </p>
            </div>
          </div>
        </div>
        <div id="menu" className='pl-5 pr-5'></div>
        <div id="product" className='pl-5 pr-5'></div>
        <div id="blog" className='pl-5 pr-5'></div>
        <div id="about" className='pl-5 pr-5'></div>
      </div>
    </div>
  )
}

export default App
