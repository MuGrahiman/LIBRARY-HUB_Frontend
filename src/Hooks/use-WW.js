import  { useEffect, useState } from 'react'

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowSize, setWidowSize] = useState('');

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
      
    
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [])

    useEffect(()=>{
        if (windowWidth < 540) {
            // Screen size is less than 768px (e.g., mobile)
            setWidowSize("SM")
           
          } else if (windowWidth < 720) {
            // Screen size is between 768px and 1024px (e.g., tablet)
            setWidowSize("MD")
            
          } else {
            // Screen size is 1024px and larger (e.g., desktop)
            setWidowSize("LG")
           
          }
    
    },[windowWidth]);

    const getHeadings = (filters, initialHead) => {
        return initialHead.filter((heading) => filters.includes(heading.name));
      };
      


  return [windowSize,getHeadings,]
}

export default useWindowWidth