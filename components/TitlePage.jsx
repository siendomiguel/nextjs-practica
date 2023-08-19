import Link from 'next/link'
import './TitlePage.css'

export default function TitlePage() {
  return (
    <nav className='navbar'>
      <Link href='/' className='Link'>
      <h1>Practica Nextjs</h1>
      </Link> 
      <ul>
        <li>
          <Link href="/" className='Link'>Inicio</Link>
        </li>
        <li>
          <Link href="/about" className='Link'>About</Link>
        </li>
        <li>
          <Link href="/posts" className='Link'>Posts</Link>
        </li>
      </ul>
    </nav>
  )
}
