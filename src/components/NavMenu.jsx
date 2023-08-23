import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/image/logo-bitfinanzas.png'
import sponsor from '../../public/image/Quantfury.png'
import './NavMenu.css'

function NavMenu() {
  const currentDate = new Date()

  return (
    <nav>
      <div className="top-menu">
        <section className="content-menu">
          <ul>
            <li>
              <Link href="/nuestro-equipo">Nuestro Equipo</Link>
            </li>
            <li>
              <Link href="/anunciate">Anunciate</Link>
            </li>
            <li>
              <Link href="/contactanos">Contactanos</Link>
            </li>
          </ul>
          <ul>
            <li>{currentDate.toDateString()}</li>
            <li>
              <Link href="/login">🔒 Iniciar sesión</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="mid-menu">
        <section className="content-menu">
          <Link href="/">
            <Image className="logo" src={logo} height={120} alt="Logo" />
          </Link>
          <Link href='https://quantfury.com/daniel/'>
            <Image src={sponsor} height={100} alt="Patrocinante" />
          </Link>
        </section>
      </div>
      <div className="bottom-menu">
        <section className="content-menu">
          <ul>
            <li>
              <Link href="/finanzas">Finanzas</Link>
            </li>
            <li>
              <Link href="/cripto">Cripto</Link>
            </li>
            <li>
              <Link href="/herramientas">Herramientas</Link>
            </li>
          </ul>
          <span>
            <input className='search' type="text" placeholder='Buscar . . .'/>
          </span>
        </section>
      </div>
    </nav>
  )
}

export default NavMenu
