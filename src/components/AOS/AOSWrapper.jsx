import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
        mirror: true, // whether elements should animate out while scrolling past them
        once: true,
        offset: 100, // offset (in px) from the original trigger point  
        easing: 'ease-in-out', // easing function to use for animation
        delay: 0, // values from 0 to 3000, with step 50ms
        
    })
  }, [])

  return <>{children}</>
}

export default AOSWrapper