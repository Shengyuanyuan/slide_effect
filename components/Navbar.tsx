import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul>
        {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} >
                {link.label}
            </Link>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
