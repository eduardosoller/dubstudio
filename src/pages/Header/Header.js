import React from 'react'
import './style.css'
import {
  Logo,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  ScrollArrow
} from '../../components/Svg/Icons'
import { Link } from 'react-scroll'
export default function Header() {
  return (
    <header className="main-header">
      <h1 id="brand">
        <a title="Reiniciar" href="/web">
          <Logo className="logo" />
        </a>
      </h1>
      <nav>
        <ul className="social-menu">
          <li>
            <a
              href="https://www.youtube.com/user/dubstudiopoa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo className="icon youtube" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/dub_studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo className="icon instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/dubstudio.cidadebaixa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo className="icon facebook" />
            </a>
          </li>
        </ul>
      </nav>
    <Link to="section" smooth duration={500}> <ScrollArrow className="scroll-arrow" /> </Link>
    </header>
  )
}
