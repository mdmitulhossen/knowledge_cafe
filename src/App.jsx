import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks'

function App() {
  const [bookmark, setBookmark] = useState([])
  const [readTime, setReadTime] = useState(0)

  const handleBookmark = (blog) => {
    console.log("booooooookmark")
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark)
  }

  const handleReadTime = (time) => {
    setReadTime(readTime + parseInt(time))
  }

  console.log(bookmark,readTime)

  return (
    <>

      <div className='max-w-[1400px] py-4 px-5 lg:px-10  mx-auto'>
        <Header/>
        <main className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mt-10'>
          <Blogs handleBookmark={handleBookmark} handleReadTime={handleReadTime}/>
          <Bookmarks bookmark={bookmark} readTime={readTime}/>
        </main>
      </div>

    </>
  )
}

export default App
