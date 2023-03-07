import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import bannerImg from '../../../../images/top-img.png';


const Banner = () => {
    const socialLinks =[
        {
            id:1,
            icon:<FaFacebookSquare/>,
            address:"https://www.facebook.com/rakibul.rupom2001"
        },
        {
            id:2,
            icon:<FaLinkedin/>,
            address:"https://www.linkedin.com/in/rakibul-98"
        },
        {
            id:3,
            icon:<FaGithubSquare/>,
            address:"https://github.com/Rakibul-98"
        }
    ]
    return (
        <div className="grid bg-[url('/src/images/banner.png')] grid-cols-1 md:grid-cols-2 pt-5">
            <div className='my-auto'>
                <p>Hello I am</p>
                <h1>Rakibul Hasan</h1>
                <p>A MERN Web-Developer</p>
                <p>I am a front-end web developer with 2 years+ of experience. In this time period, I have developed 50+ front-end designs. I have completed my certificate course from Programming Hero. I am very passionate about my work. I am a quick learner too. I can adopt new technologies in a quick time. Web development is not only a job for me, it's my passion.</p>
                
                <div className='flex'>
                    <button className='border-2 border-orange-600 bg-orange-600 rounded-3xl px-7 py-1 hover:bg-transparent mr-5'><a href="https://drive.google.com/file/d/1pnIyfwxC8hXMbSwCPwJmaaHP6SCMxnLn/view?usp=sharing">Show Resume</a></button>
                    {
                        socialLinks.map(sl=>
                        <Link className='mr-5 mt-1'>
                            <span className='text-4xl hover:mask-diamond mask mask-square'>{sl.icon}</span>
                        </Link>)
                    }
                </div>
            </div>
            <div className=''>
                <img className='mx-auto' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;