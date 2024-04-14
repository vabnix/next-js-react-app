import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/texas.png'

export default function Navbar() {
  return (
    <nav>
        <Image
          src={Logo}
          width={70}
          alt='Texas Helpdesk'
          placeholder='blur'
         />
        <h1>Texas Helpdesk</h1>
        <Link href='/'>Home</Link>
        <Link href='/tickets'>Tickets</Link>
      </nav>
  )
}
