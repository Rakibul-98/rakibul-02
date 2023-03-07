import React from 'react';
import img1 from '../../../../images/speciality/arrow.png';
import img2 from '../../../../images/speciality/quality.png';
import img3 from '../../../../images/speciality/idea.png';


const Specialty = () => {
    const specialties =[
        {
            id:1,
            icon:img1,
            title:"Pixel Perfect"
        },
        {
            id:2,
            icon:img2,
            title:"Quality Works"
        },
        {
            id:3,
            icon:img3,
            title:"Innovative Ideas"
        }
    ]
    return (
        <div className="bg-[url('/src/images/speciality-bg.png')] h-96 bg-cover bg-center bg-no-repeat text-center">
            <div className='grid grid-cols-3 justify-items-center h-full lg:w-7/12 md:w-9/12 mx-auto content-end pb-20'>
                {
                    specialties.map(s=>
                    <div className=''>
                        <img className='h-24 md:h-32' src={s.icon} alt="" />
                        <p>{s.title}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Specialty;