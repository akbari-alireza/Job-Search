import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo1 from '../../Assets/logo (1).jpg'
import logo2 from '../../Assets/logo (1).png'
import logo3 from '../../Assets/logo (2).jpg'
import logo4 from '../../Assets/logo (2).png'
import logo5 from '../../Assets/logo (3).jpg'
import logo6 from '../../Assets/logo (3).png'
import logo7 from '../../Assets/logo (4).jpg'
import logo8 from '../../Assets/logo (4).png'


const Data = [
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam perferendis',
    company: ' Ali LTD Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI Designer',
    time: '14Hrs',
    location: 'Afghanistan',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam perferendis',
    company: 'Smart City'
  },
  {
    id:3,
    image: logo3,
    title: 'Software Eng',
    time: '14Hrs',
    location: 'Iran',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam perferendis',
    company: 'Nabi Boost '
  },
  {
    id:4,
    image: logo4,
    title: 'UI/UX Designer',
    time: '10H',
    location: 'Germany',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam perferendis',
    company: ' Howawei.'
  },
  {
    id:5,
    image: logo5,
    title: 'Product Designer',
    time: 'Now',
    location: 'manchester',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam perferendis',
    company: 'Government'
  },
  {
    id:6,
    image: logo6,
    title: 'Researcher',
    time: '5H',
    location: 'Norway',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam perferendis',
    company: 'Nin con.'
  },
  {
    id:7,
    image: logo7,
    title: 'Lead Developer',
    time: '14H',
    location: 'Leeds',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam perferendis',
    company: 'Nimelio - UK'
  },
  {
    id:8,
    image: logo8,
    title: 'Data Scientist',
    time: '2 Days',
    location: 'Turkey',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam perferendis',
    company: 'Nome And sons'
  },
]

function Jobs() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

        {Data.map(({id,image,title,time,location,desc,company}) =>{
          return(
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        
          <span className='flex justify-between items-center gap-4 '>
            <h1 className='tex-[16px] font-semibold text-textColor group-hover:text-white text-4xl'>{title}</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>{time}
            </span>
          </span>
          <h6 className='text-[#ccc]'>{location}</h6>


          <p className='text-[13px] text=[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white '>{desc}</p>
          <div className="company flex items-center gap-2">
            <img src={image} alt='company logo' className='w-[10%] rounded-md'/>
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
          </div>

          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white '>Apply Now</button>

        </div>
          )
        })
      }
        
        
      </div>

    </div>
  )
}

export default Jobs