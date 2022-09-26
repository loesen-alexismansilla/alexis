import Head from 'next/head'

import Favicons from '../components/Favicons'

import { data } from 'autoprefixer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexis Mansilla</title>
        <Favicons />
      </Head>
      <div className='w-full min-h-screen grid grid-cols-4 bg-gray lg:p-4'>
        <header>
          <div>
            <img src='/alexis.jpeg' alt='profile' />
          </div>
          <h1></h1>
        </header>
        <main>
          <div>
            <div>Email</div>
            <div>alexis1614@live.com.ar</div>
          </div>
          <div>
            <div>Profession</div>
            <div>Full Stack</div>
          </div>
          <div>
            <div>Experiencie</div>
            <div>
              <div>WebDeveloper</div>
              <div>WebDeveloper</div>
              <div>WebDeveloper</div>
            </div>
          </div>
          <div>
            <div>Stacks</div>
            <div>Tecnologías</div>
          </div>
          <div>
            <div>Social</div>
            <div>Icons</div>
          </div>
        </main>
      </div>
    </>
  )
}
