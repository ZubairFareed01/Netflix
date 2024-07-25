import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function Row({ FetchURL, title, RowId }) {
  const [Movies, setMovies] = useState([])


  useEffect(() => {

    axios.get(FetchURL).then((response) => {
      setMovies(response.data.results)
    })

  }, [FetchURL])

  const slideLeft = ()=>{
    var slider = document.getElementById('slider' + RowId)
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = ()=>{
    var slider = document.getElementById('slider' + RowId)
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    < >
      <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>

      <div className=' relative flex items-center group' >

        <MdChevronLeft onClick={slideLeft}
          className='absolute bg-white rounded-full opacity-50 hover:opacity-100 z-10 hidden left-0 group-hover:block' size={40} />
        <div id={'slider' + RowId}  className=' w-full h-full whitespace-nowrap scroll-smooth no-scrollbar overflow-x-scroll relative ' >
          {Movies.map((item, id) => {
            return (<Movie item={item} />)
          })}
        </div>
        <MdChevronRight
          onClick={slideRight} className='absolute bg-white rounded-full opacity-50 hover:opacity-100 z-10 hidden right-0  group-hover:block' size={40} />
      </div >

    </>
  )
}

export default Row