import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  
  
  return (
    <div className={`fixed bottom-5 right-5 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className='bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 inline-flex items-center justify-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 w-8 h-8'
      >
        <FontAwesomeIcon 
        icon={faCaretUp} 
        color="black"
        />
      </button>
    </div>
  )
}