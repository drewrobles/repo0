import { useEffect } from 'react'

function RedirectExample() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        // 👇️ redirects to an external URL
        window.location.replace('https://hooks.andrewrobles.com');
      }, 0);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return <></>;
  }

export default RedirectExample