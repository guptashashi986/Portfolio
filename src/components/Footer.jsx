import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <hr/>
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>
                        <FaSquareFacebook size={34}/>
                        <FaLinkedin size={34}/>
                        <FaInstagram size={34}/>
                        <FaTelegram size={34}/>
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                        <p className='text-sm'>&copy; 2024 Ypur Company. All rights reserved.</p>
                        <p className='text-sm'>Supportive Partner 💕 Shashi Kumar</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer