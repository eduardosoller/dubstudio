import React, { useEffect, useState } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

import './style.css'
import { PriceTableRay } from '../../components/Svg/Icons'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import PageNavigation from '../../components/PageNavigation'
import Player from '../Player/Player'
import Appointments from '../Appointments/Appointments'
import { Element } from 'react-scroll'
import { ImagePlaceholder } from '../../components/ImagePlaceholder'

import db from '../../assets/json/gravacao.json'

function Recordings() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty('--main-color', db.color)
    // eslint-disable-next-line no-new
    new Swiper('.swiper-1', {
      breakpoints: {
        // window width >= 320px
        320: {
          slidesPerView: 1.8,
          spaceBetween: 20
        },
        // window width >= 800px
        800: {
          slidesPerView: 2.4,
          spaceBetween: 30
        },
        // window width >= 1200px
        1200: {
          slidesPerView: 3.6,
          spaceBetween: 30
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    // eslint-disable-next-line no-new
    new Swiper('.swiper-2', {
      breakpoints: {
        320: {
          slidesPerView: 1.8,
          spaceBetween: 20
        },
        800: {
          slidesPerView: 2.4,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3.6,
          spaceBetween: 30
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }, [])

  return (
    <>
      <div>
        <Element name="sobre">
          <section id="home" className="Recordings">
            <Header />
            <div className="flex-container">
              <Navigation />
              <main>
                <div className="row flex-row">
                  <div
                    id="containerRecordingsHeadline"
                    className="col s12 l6 flex-center"
                  >
                    <div className="headline">
                      <h2>
                        <span>GRAVAÇÃO & </span>
                        <span className="outlined"> MASTERIZAÇÃO</span>
                      </h2>
                      <hr />
                    </div>
                  </div>
                  <div
                    id="containerRecordingsStudios"
                    className="background-img col s8 l6 flex-center"
                  ></div>
                </div>
              </main>
              <PageNavigation
               links={['sobre', 'equipamentos', 'ouvir', 'gravar']}
               containers={['home',
                 'containerRecordingInfo',
                 'containerRecordingEquipments',
                 'containerPlayerHome',
                 'containerAppointment']}
               />
            </div>
          </section>
        </Element>
        <Element name="sobre">
          <section id="containerRecordingInfo">
            <div className="titleBackground"></div>
            <div className="row">
              <div className="col l7 s12 flex-container">
                <div className="title">
                  <h4>{db.title}</h4>
                </div>
                <hr />
                <div className="text-container">
                  <div>
                    <p>{db.description}</p>
                  </div>
                </div>
                <div className="infoBar">
                  <div className="info">
                    <h4>ESPAÇO</h4>
                    <div className="pill">
                      {db.roomsize}m<sup>2</sup>
                    </div>
                  </div>
                  <div className="info">
                    <h4>{db.timesTitle}</h4>
                    <div className="pill">{db.times}</div>
                  </div>
                </div>
              </div>
              <div className="col l5 s12 recordingPriceTable-container">
                <table id="recordingPriceTable">
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <div className="tableTitle">
                          <PriceTableRay />
                          <h3>PREÇOS</h3>
                          <PriceTableRay className="rayRight" />
                        </div>
                      </td>
                    </tr>
                    {db.prices.map((tablerow, index) => {
                      return (
                        <tr key={index}>
                          {tablerow.col1 ? (
                            <td>{tablerow.col1}</td>
                          ) : (
                            <td className="th2">{tablerow.th}</td>
                          )}
                          <td className="price">{tablerow.col2}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </Element>
        <Element name="equipamentos">
          <section id="containerRecordingEquipments">
            <header></header>
            <div id="containerSliders">
              <div className="swiper-container swiper-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="equipmentTitle">
                      <h3>MICS</h3>
                    </div>
                  </div>
                  {db.equipments.mics.map(item => {
                    return (
                      <div key={item.id} className="swiper-slide">
                        <div className="equipmentImg">
                          <div className="bg-title" />
                          <h4>{item.title}</h4>
                          {!isImageLoaded && <ImagePlaceholder />}
                          <img
                            className={`img-fluid ${
                              isImageLoaded ? 'd-block' : 'd-none'
                            }`}
                            onLoad={() => setIsImageLoaded(true)}
                            src={item.imgSrc}
                            alt={item.title}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* swiper-1 */}
              <div className="swiper-container swiper-2">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="equipmentTitle">
                      <h3>EXTRAS</h3>
                    </div>
                  </div>

                  {db.equipments.extras.map(item => {
                    return (
                      <div key={item.id} className="swiper-slide">
                        <div className="equipmentImg">
                          <div className="bg-title" />
                          <h4>{item.title}</h4>
                          <img src={item.imgSrc} alt={item.title} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="ouvir">
          <Player />
        </Element>
        <Element name="gravar">
          <Appointments sala={db} />
        </Element>
        <Footer />
      </div>
    </>
  )
}

export default Recordings
