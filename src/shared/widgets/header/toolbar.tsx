
'use client ';

import {Button} from '@nextui-org/react';
import Link from 'next/link';

const Toolbar = () => {
  return (
    <>
      <Button color="primary" className='text-lg'>
        Start Trials 
      </Button>
      <Link href={"/sign-up"} >
        Login
      </Link>
    </>
  );
};

export default Toolbar;
