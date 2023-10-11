import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

import ShopHome from '../ShopHome/ShopHome'
import Player from '../Player/Player'

import sala01home from '../../assets/img/sala01.png'
import sala02home from '../../assets/img/sala02.png'
import { ScrollArrow } from '../../components/Svg/Icons'
import { useSpring, animated } from 'react-spring'

const calcA = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - (window.innerWidth / 2 + window.innerWidth / 4)) / 20,
  1.1
]
const calcB = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - (window.innerWidth / 2 + window.innerWidth / 4)) / 20,
  1.1
]
const transA = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const transB = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function App() {
  const [propsA, setA] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 3, tension: 350, friction: 40 }
  }))
  const [propsB, setB] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 3, tension: 350, friction: 40 }
  }))
  return (
    <div>
      <section id="home" className="Home">
        <Header />
        <div className="flex-container">
          <Navigation />
          <main>
            <div className="row flex-row">
              <div id="containerQuemsomos" className="col s12 l6">
                <div className="headline">
                  <span className="script-font">desde 2005</span>
                  <h2>
                    <span>ENSAIOS E </span>
                    <span className="outlined">GRAVAÇÕES</span>
                  </h2>
                  <hr />
                  <p>
                    O Dub Studio possui duas salas com tratamento acústico
                    profissional, ambientes e bar exclusivos para cada banda e
                    acessórios para seu instrumento.
                  </p>
                </div>
              </div>
              <div id="containerStudios" className="col s12 l6">
                <div className="inner">
                  <article id="Studio01">
                  <NavLink to="/estudios/sala01">
                    <animated.div
                      className="card3d"
                      onMouseMove={({ clientX: x, clientY: y }) =>
                        setA({ xys: calcA(x, y) })
                      }
                      onMouseLeave={() => setA({ xys: [0, 0, 1] })}
                      style={{ transform: propsA.xys.interpolate(transA) }}
                    >
                      <img src={sala01home} alt="SALA 01" />
                      <h3>
                        SALA 01<span>17h-19h | 19h-21h | 21h-23h</span>
                      </h3>
                    </animated.div>
                    </NavLink>
                  </article>
                  <article id="Studio02">
                  <NavLink to="/estudios/sala02">
                    <animated.div
                      className="card3d"
                      onMouseMove={({ clientX: x, clientY: y }) =>
                        setB({ xys: calcB(x, y) })
                      }
                      onMouseLeave={() => setB({ xys: [0, 0, 1] })}
                      style={{ transform: propsB.xys.interpolate(transB) }}
                    >
                      <img src={sala02home} alt="SALA 02" />
                      <h3>
                        SALA 02<span>16h-18h | 18h-20h | 20h-22h</span>
                      </h3>
                    </animated.div>
                    </NavLink>
                  </article>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="scroll-arrow-container"><ScrollArrow className="scroll-arrow"/></div>
      </section>
      <ShopHome />
      <Player />
      <Footer />
    </div>
  )
}

export default App
