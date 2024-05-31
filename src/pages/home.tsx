import React from 'react'
import SplashBanner from '../components/SplashBanner'
import AboutUs from '../components/AboutUs'
import Offers from '../components/offers'
import Target from '../components/Target'
import Imgshw from '../components/Imgshw'

type Props = {}

const Home:React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <SplashBanner/>
      <AboutUs/>
      <Offers/>
      <Target/>
      <Imgshw/>
    </div>
  )
}

export default Home