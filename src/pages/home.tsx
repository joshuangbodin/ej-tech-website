import React from 'react'
import SplashBanner from '../components/SplashBanner'

type Props = {}

const Home:React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <SplashBanner/>
    </div>
  )
}

export default Home