import Link from 'next/link'
import FooterLogo from './footer.logo';

const Footer = () => {
  return (
  <footer className='w-full bg-black text-white pt-10'>
    <div className="w-[95%] md:flex m-auto py-5">
        <div className='w-full md:w-[40%]'>

            <Link href={"/"}>
                <FooterLogo />

            </Link>
            <p className='text-2xl'>
                Get ShivankitNewsletter Updates deliverd Directly to your Inbox.
            </p>
            <br/>
            
         <div className='flex item-center w-full'>
            <input type="email" name="" id="" placeholder='Enter Your Email' className='bg-transparent w-full md:w-[50%] border h-[42px] px-2 rounded rounded-r-0 outline-none'></input>
            <button className='w-[90px] cursor-pointer rounded-r h-[30px] bg-blue-500 text-xl outline-none'>
                Submit
            </button>

         </div>
         <br/>
         <p className='text-xs'>
By Subscribing this you agree to woth our privacy and provide consent to recieve updates from our company .
         </p>
        </div>
        <div className='w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0'>
            <div className='md:w-[50%] flex justify-around'>
                <div>
                    <ul>
                        <li className='text-xl pb-4 cursor-pointer '>
                            Create
                        </li>
                        <li className='text-xl pb-4 cursor-pointer '>
                            Write
                        </li>
                        <li className='text-xl pb-4 cursor-pointer '>
                            Grow
                        </li>
                        <li className='text-xl pb-4 cursor-pointer '>
                            Montize
                        </li>
                        <li className='text-xl pb-4 cursor-pointer '>
                            Analyze
                        </li>
                    </ul>
                </div>
                 </div>

        </div>
        <div>
            <p className='tex-lg text-center pb-10'>
                &copy; 2024 ShivankitNewsLetter, inc ALL Rights Reserved
            </p>
        </div>

    </div>

  </footer>
  )
}

export default Footer
