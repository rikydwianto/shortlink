import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './layouts/layout'

export default function Home() {
  return (  
    <Layout title="Halaman Awal">
      <h1>URL Shortener | GRATIS</h1>
      <small>Mempersingkat link, agar mudah diingat!</small>
      {/* <input type="submit" className='btn btn-danger' value={'Tombol'}/> */}
    </Layout>
  )
}
