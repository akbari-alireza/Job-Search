import React from 'react'
import logo1 from '../../Assets/logo (1).jpg'
import logo2 from '../../Assets/logo (1).png'
import logo5 from '../../Assets/logo (3).jpg'
function Value() {
  return (
    <div className='mb=[4rem] mt-[6rem] '>
      <h1 className='text-textColor text-[25px] pb-[3rem] font-bold w-[400px] block'>
        The value  that holds us true and to account</h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={logo1} alt="" className='rounded-md w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
             Things Being made beautiful simple are at the heart of everything we do.</p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#595991] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={logo2} alt="" className='rounded-md w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className=' text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
             Things Being made beautiful simple are at the heart of everything we do.</p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#c24534] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={logo5} alt="" className='rounded-md w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className=' text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
             Things Being made beautiful simple are at the heart of everything we do.</p>
        </div>
      </div>
      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px] '>
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a caree</h1>
          <h2 className='text-textColor text-[25px] font-bold '>Let's get starded!</h2>
        </div>
          <button className=' border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'> 
            Get Started 
          </button>
      </div>
    </div>
  )
}

export default Value