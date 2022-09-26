import Head from 'next/head'

import Favicons from '../components/Favicons'

import { data } from 'autoprefixer'

let socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Alexis971614/',
    icon: 'socials/facebook.png'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alexis1614/',
    icon: 'socials/linkedin.png'
  },
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=541133453815&text=Hola!',
    icon: 'socials/whatsapp.png'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Dv-del',
    icon: 'socials/github.png'
  }
]

let stacks = [
  {
    name: 'ExpressJS',
    icon: 'stacks/express.png'
  },
  {
    name: 'Javascript',
    icon: 'stacks/js.png'
  },
  {
    name: 'MongoDB',
    icon: 'stacks/mongodb.png'
  },
  {
    name: 'NextJS',
    icon: 'stacks/next-js.png'
  },
  {
    name: 'Node',
    icon: 'stacks/node.png'
  },
  {
    name: 'Postgres',
    icon: 'stacks/postgres.png'
  },
  {
    name: 'React',
    icon: 'stacks/react.png'
  },
  {
    name: 'Sequelize',
    icon: 'stacks/sequelize.png'
  },
  {
    name: 'Typescript',
    icon: 'stacks/typescript.png'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexis Mansilla</title>
        <Favicons />
      </Head>
      <main className='bg-black'>
        <div className='w-2/4 m-auto'>
          <div className='flex flex-col justify-center items-center align-center w-full min-h-screen bg-gray lg:p-4 text-black'>
            <div className='flex items-center w-full h-24 bg-white rounded-md'>
              <img className='rounded-full h-16 ml-10' src='/alexis.jpeg' alt='profile' />
              <h1 className='ml-5 text-xl'>Alexis Mansilla</h1>
            </div>
            <div className='w-full mt-5 space-y-0.5'>
              <div className='flex items-center w-full h-16 bg-white rounded-tl-md rounded-tr-md'>
                <div className='ml-10'>Email</div>
                <div className='ml-auto mr-10'>alexis1614@live.com.ar</div>
              </div>
              <div className='flex items-center w-full h-16 bg-white'>
                <div className='ml-10'>Profession</div>
                <div className='ml-auto mr-10'>Full-stack Web Developer</div>
              </div>
              <div className='flex items-center w-full h-16 bg-white'>
                <div className='ml-10'>Experiencie</div>
                <div className='flex items-center ml-auto mr-10 space-x-6 text-white'>
                  <div className='bg-amber-500 rounded-md p-1 pl-3 pr-3 hover:bg-black'>WebDeveloper</div>
                  <div className='bg-amber-500 rounded-md p-1 pl-3 pr-3 hover:bg-black'>WebDeveloper</div>
                  <div className='bg-amber-500 rounded-md p-1 pl-3 pr-3 hover:bg-black'>WebDeveloper</div>
                </div>
              </div>
              <div className='flex items-center w-full h-16 bg-white'>
                <div className='ml-10'>Preferred Stack</div>
                <div className='flex space-x-2 ml-auto mr-10'>
                  {stacks.map((data) => {
                    return <img className='h-8' src={data.icon} alt={data.name} />
                  })}
                </div>
              </div>
              <div className='flex items-center w-full h-16 bg-white rounded-bl-md rounded-br-md'>
                <div className='ml-10'>Social</div>
                <div className='flex ml-auto mr-10 space-x-5'>
                  {socials.map((data) => {
                    return (
                      <a href={data.href} rel='noreferrer' target='_blank' key={data.name}>
                        <img className='h-8' src={data.icon} alt={data.name} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
