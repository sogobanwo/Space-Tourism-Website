import React, { FC } from 'react'
import Header from '../components/header'
import HompageContent from '../components/HompageContent'

const HomePage:FC = () => {
  return (
    <div className='homepage'>
      <Header />
      <HompageContent />
    </div>
  )
}

export default HomePage