import React from 'react';
import logo from '../../images/logo.png';
import resume from '../../images/Resume/resume-rakibul.pdf';

const Header = () => {
    const handleToggleMenu = () =>{
        const navBar = document.getElementById("nav_links_sm");
        if (navBar.style.display === "") {
            navBar.style.display = "block"
        }
        else{
            navBar.style.display = ""
        }
    }

    const links = [
        {
            address:"/",
            name:"Home"
        },
        {
            address:"#portfolio",
            name:"Portfolio"
        },
        {
            address:"#skill",
            name:"Skills"
        },
        {
            address:"#service",
            name:"Service"
        },
        {
            address:"#contact",
            name:"Contact"
        }
    ]

    return (
        <nav class="flex justify-between h-24 relative bg-black">
            <div class="flex my-auto">
                <a href="/"><img class="h-14" src={logo} alt="logo"/></a>
                <h1 class="text-5xl font-semibold">RH</h1>
            </div>
            <div className='mt-5 md:hidden absolute right-5 text-right '>
                <label  className="btn btn-circle swap swap-rotate">
                    <input onClick={handleToggleMenu} type="checkbox" />
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
                <div className=''>
                    <ul id='nav_links_sm' className='text-right mr-2 hidden bg-slate-800 px-5 pb-2 rounded-xl'>
                        {
                            links.map(link=><li className='mt-2 hover:text-orange-600 text-lg'><a href={link.address}>{link.name}</a></li>)
                        }
                        <li className='border-2 border-orange-600 rounded-3xl px-5 py-2 hover:bg-orange-600 mt-2'><a href={resume} download><button class="">Download Resume</button></a></li>
                    </ul>
                </div>
            </div>
            <ul id='nav_links_lg' className='md:flex my-auto hidden'>
                {
                    links.map(link=><li className='ml-7 mt-3 hover:text-orange-600 text-lg'><a href={link.address}>{link.name}</a></li>)
                }
                <li className='ml-8 border-2 border-orange-600 rounded-3xl px-5 py-2 hover:bg-orange-600 sm:mt-2'><a href={resume} download><button class="">Download Resume</button></a></li>
            </ul>
            
        </nav>
    );
};

export default Header;