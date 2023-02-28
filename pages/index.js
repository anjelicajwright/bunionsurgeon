import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/templates/Layout'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/home/Banner'
import { KnOverview } from '../components/home/KnOverview'
import { BulletpointSurgery } from '../components/home/BulletpointSurgery'
import { PricingHomepage } from '../components/home/PricingHomepage'
import { ExtraInfo } from '../components/home/ExtraInfo'
import { GetInTouch } from '../components/home/GetInTouch'

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <Banner />
        <KnOverview />
        <BulletpointSurgery />
        <PricingHomepage />
        <ExtraInfo />
        <GetInTouch />
      </Layout>
    </>
  )
}
