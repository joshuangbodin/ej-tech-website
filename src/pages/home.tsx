import React from 'react'
import SplashBanner from '../components/SplashBanner'
import AboutUs from '../components/AboutUs'

type Props = {}

const Home:React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <SplashBanner/>
      <AboutUs/>
    </div>
  )
}

export default Home