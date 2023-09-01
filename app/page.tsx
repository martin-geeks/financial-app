import Image from 'next/image'
import {
  AppBar,
    LandingPage
} from '@/components'

export default function Home() {
  return (
    <main className="">
    <AppBar />
      <LandingPage/>
    </main>
  )
}
