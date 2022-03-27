import * as React from 'react'

interface LinkProps {
  href: string
  alt: string
  title: string
  logo: string
}

const Link = (props: LinkProps) => (
  <a target='_blank' href={props.href} rel='noreferrer' className='p-4 block'>
    <img src={props.logo} alt={props.alt} className='h-[40px] inline' />
    <p className='text-2xl inline text-primary p-3 hover:text-secondary duration-500'>
      {props.title}
    </p>
  </a>
)

const Contacts = () => (
  <div className='w-full p-[36px] bg-paper rounded-3xl'>
    <p className='text-center font-bold text-secondary text-4xl'>
      [ You can find me here ]
    </p>
    <div>
      <Link
        logo={
          process.env.PUBLIC_URL + '/images/GitHub-Mark-Light-120px-plus.png'
        }
        title='wgmlgz'
        alt='github'
        href='https://github.com/Wgmlgz'
      />
      <Link
        logo={process.env.PUBLIC_URL + '/images/TgLogo.png'}
        title='@wgmlgz'
        alt='telegram'
        href='https://t.me/Wgmlgz'
      />
      <Link
        logo={process.env.PUBLIC_URL + '/images/email.svg'}
        title='wgmlgz.dev@gmail.com'
        alt='email'
        href='mailto:wgmlgz.dev@gmail.com'
      />
    </div>
  </div>
)

export default Contacts
