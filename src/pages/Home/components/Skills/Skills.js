import React from 'react';
import skillImg from '../../../../images/skill-img.png';

const Skills = () => {
    const progresses =[
        {
            id:1,
            title:"HTML & CSS",
            c:"info",
            value:98
        },
        {
            id:2,
            title:"JavaScript",
            c:"",
            value:95
        },
        {
            id:3,
            title:"React JS",
            c:"error",
            value:75
        },
        {
            id:4,
            title:"Firebase",
            c:"warning",
            value:70
        },
        {
            id:5,
            title:"MongoDB",
            c:"success",
            value:75
        },
    ]
    return (
        <div>
            <div className='w-3/4 md:w-1/4'>
                <p>MY SKILLS</p>
                <h2>I Develop Skills Regularly to Keep Me Updated</h2>
                <p><i>"I am always doing that which I cannot do, in order that I may learn how to do it" <span>-Pablo Picasso</span></i></p>
            </div>
            <div className='md:flex md:flex-row-reverse bg'>
                <div className='md:w-1/2'>
                    <img src={skillImg} alt="" />
                </div>
                <div className='md:w-1/2 mt-10'>
                    {
                        progresses.map(p=>
                        <div className=''>
                            <label for="">{p.title}</label>
                            <br />
                            <progress className={`progress progress-${p.c} text w-8/12 h-4 bg-slate-50`} value={p.value} max="100"></progress>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;