import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        
        <Image src="/your-logo.png" alt="Your Logo" />
    </div>
  )
}

export default Logo

/*
1. Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider.
*/