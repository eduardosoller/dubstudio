import React, { useEffect, useState } from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import { NavLink } from 'react-router-dom'
import './style.css'
import { Logo, FacebookLogo, InstagramLogo, YoutubeLogo, WhatsIcon, PhoneSkullIcon } from '../../components/Svg/Icons'
import { ModalSchedule } from '../../components/ModalSchedule'

export default function Navigation() {
  const [blockScroll, allowScroll] = useScrollBlock()
  const [showMenu, setShowMenu] = useState(false)
  const mobileMenuToggle = () => {
    setShowMenu(showMenu !== true)
  }
  useEffect(() => {
    if (window.innerWidth < 993) {
      showMenu
        ? blockScroll()
        : allowScroll()
    }
  }, [showMenu])
  const [showModalSchedule, setShowModalSchedule] = useState(false)
  const scheduleModalToggle = () => {
    setShowModalSchedule(showModalSchedule !== true)
  }
  const closeModal = () => {
    setShowModalSchedule(false)
  }
  return (
    <nav id="main-menu"
      className={showModalSchedule || showMenu ? 'extraPadding' : null}
    >
      <div
        onClick={mobileMenuToggle}
        className={`mobileMenuBackground ${showMenu ? 'open' : 'close'}`}
      ></div>
      <button className="toggle-menu" onClick={mobileMenuToggle}>
        <i />
        <i />
        <i />
      </button>
      <h1 id="brand">
        <NavLink to="/" title="Reiniciar" exact>
          <Logo className="logo" />
        </NavLink>
      </h1>
      <div className={`menu-container ${showMenu ? 'open' : 'close'}`}>
        <button className="closeMenu" onClick={mobileMenuToggle}>
          <i className="small material-icons">close</i>
        </button>
        <ul
          className="primary-menu"
          onClick={window.innerWidth < 992 ? mobileMenuToggle : null}
        >
          <li>
            <NavLink to="/" exact>
              <span> HOME </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/estudios/sala01" className="sala01Link">
              <span> SALA AZUL </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/estudios/sala02" className="sala02Link">
              <span> SALA VERMELHA</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/gravacao">
              <span>GRAVAÇÃO</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/agenda">
              <span>AGENDA </span>
            </NavLink>
          </li>
        </ul>
        <ul className="menu-social">
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
              href="https://www.youtube.com/user/dubstudiopoa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo className="icon youtube" />
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
      </div>
      <ul className="secondary-menu">
        <li>
          <a
            title="Abrir WhatsApp"
            href="https://wa.me/555130227495"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhoneSkullIcon className="phone-skull" />
            (51) 3022 7495
          </a>
        </li>
        <li>
          <button
            className="whatsapp-button button-outlined"
            onClick={() => window.open('https://wa.me/555130227495')}
            rel="noopener noreferrer"
          >
            <WhatsIcon />
          </button>
          <button className="button-outlined" onClick={scheduleModalToggle}>
            <i className="small material-icons">event</i>
            <span>MARCAR HORÁRIO</span>
          </button>
        </li>
      </ul>
      <ModalSchedule onClose={closeModal} show={showModalSchedule} />
    </nav>
  )
}
