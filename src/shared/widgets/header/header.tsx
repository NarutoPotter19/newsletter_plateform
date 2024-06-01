// import React from 'react'
import Link from 'next/link';
/*
The line import Link from 'next/link' is importing the Link component from the next/link module in your Next.js project.

In Next.js, the Link component is used for client-side navigation between pages. It allows you to create links that, when clicked, will prefetch the linked page and navigate to it without a full page reload. This results in a faster and smoother user experience compared to traditional anchor tags (<a> elements) for navigation.

*/
import Logo from './logo';
import NavItems from './nav.Items';
import Toolbar from './toolbar';

const Header = () => {
  return (
    <header className='w-full sticky top-0 left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between h-[80px] bg-white text-black'>
      <div>
        <Link href={"/"}>

            <Logo/>
            
            </Link>

            <div>
              <NavItems />

              
            </div>

            <div className='flex items-center gap-3'>
              <Toolbar/>
            </div>

      </div>
    </header>
  )
}

export default Header;
