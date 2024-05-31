import React from 'react'
import SplashBanner from '../components/SplashBanner'
import AboutUs from '../components/AboutUs'
import Offers from '../components/offers'
import Target from '../components/Target'

type Props = {}

const Home:React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <SplashBanner/>
      <AboutUs/>
      <Offers/>
      <Target/>
    </div>
  )
}

export default Home