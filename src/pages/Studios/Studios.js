import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import PageNavigation from '../../components/PageNavigation'
import Appointments from '../Appointments/Appointments'

import './style.css'
import { PriceTableRay } from '../../components/Svg/Icons'
import Preloader from '../../components/Preloader'
import equip_title_bg from '../../assets/img/equip-title.png'
import { ImagePlaceholder } from '../../components/ImagePlaceholder/index'
import api from 'axios'
import db from '../../assets/json/estudios.json'

function Studios(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [color, setColor] = useState('')
  // eslint-disable-next-line react/prop-types
  const [sala, setSala] = useState(props.match.params.sala)
  const [prices, setPrices] = useState([])

  useEffect(() => {
    // Carrega preços que são editáveis pelo wp-admin
    setPrices([])
    const loadTextData = async () => {
      const link = sala === 'sala01' ? 'salaazul' : sala === 'sala02' ? 'salavermelha' : ''
      const wp = await api.get(`/${link}`)
      const priceTable = [
        { th: 'ENSAIO', col2: wp.data[0].valor_de_ensaio },
        { th: 'GRAVAÇÃO', col2: '' },
        { col1: 'ensaio', col2: wp.data[0].valor_de_gravacao_de_ensaio },
        { col1: 'vídeo  (por música)', col2: wp.data[0].valor_gravacao_de_video },
        { ...(wp.data[0].valor_gravacao_de_video_hora ? { col1: 'vídeo  (por hora)', col2: wp.data[0].valor_gravacao_de_video_hora } : null) },
        { ...(link === 'salavermelha' ? { th: 'LIVE', col2: 'Consulte-nos' } : null) },

        { th: 'INSTRUMENTOS', col2: '' },
        { col1: 'guitarra/baixo', col2: wp.data[0].valor_guitarrabaixo },
        { col1: 'pratos', col2: wp.data[0].valor_pratos },
        { ...(wp.data[0].valor_piano ? { col1: 'piano', col2: wp.data[0].valor_piano } : null) }
      ]
      function isEmpty(obj) {
        return Object.keys(obj).length !== 0
      }
      setPrices(priceTable.filter(item => isEmpty(item)))
    }
    loadTextData()
  }, [sala])
  useEffect(() => {
    // console.log(prices)
  }, [prices])
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setSala(props.match.params.sala)
    setColor(db[sala].color)
    document.documentElement.style.setProperty('--main-color', color)
    // eslint-disable-next-line react/prop-types
  }, [color, props.match.params.sala, sala])
  return (
    <>
      <div>
        <section id="home" className="Studios">
          <Header />
          <div className="flex-container">
            <Navigation />
            <main>
              <div id="containerStudio" className="flex-container">
                <header className="title">
                  <h3>
                    <span>ESTÚDIOS</span> {`// ${db[sala].title}`}
                  </h3>
                  <div className="bigNumber">{db[sala].title}</div>
                </header>
                <div className="full-image">
                  {!isImageLoaded && <ImagePlaceholder />}
                  <img
                    className={`img-fluid ${isImageLoaded ? 'd-block' : 'd-none'
                      }`}
                    src={db[sala].image}
                    width="1200"
                    height="503"
                    onLoad={() => setIsImageLoaded(true)}
                    alt=""
                  />
                </div>
                <PageNavigation
                  links={['sobre', 'equipamentos', 'marcar']}
                  containers={['home', 'containerStudioInfo', 'containerEquipments', 'containerAppointment']}
                />
              </div>
            </main>
          </div>
        </section>
        <Element name="sobre">
          <section id="containerStudioInfo">
            <div className="titleBackground"></div>
            <div className="row">
              <div className="col l7 s12 flex-container">
                <div className="title">
                  <h4>A {db[sala].title}</h4>
                </div>
                <hr></hr>
                <div className="text-container">
                  <div>
                    <p>{db[sala].description}</p>
                  </div>
                </div>
                <div className="infoBar">
                  <div className="info">
                    <h4>ESPAÇO</h4>

                    <div className="pill">
                      {db[sala].roomsize}m<sup>2</sup>
                    </div>
                  </div>
                  <div className="info">
                    <h4>{db[sala].timesTitle}</h4>
                    {db[sala].calendar.times.map((item, index) => (
                      <div key={index} className="pill">
                        {`${item.start}h `}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col l5 s12 studioPriceTable-container">
                <table id="studioPriceTable">
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
                    {prices.length === 0 && <tr><td className="nopadding"><Preloader /></td></tr>}
                    {prices.map((tablerow, index) => {
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
          <section id="containerEquipments">
            <div className="no-container">
              <div className="flex-row flex-center row">
                <div className="col l8 s12 equipmentContainer">
                  {db[sala].equipments.map((item, index) => (
                    <div
                      key={index}
                      db_studios-index={index}
                      className={`col s6 ${index % 2 === 0 ? 'top-margin' : ''
                        } `}
                    >
                      <div className="equipmentImg">
                        <div className="bg-title" />
                        <h4>{item.title}</h4>
                        {!isImageLoaded && <ImagePlaceholder />}
                        <img
                          className={`img-fluid ${isImageLoaded ? 'd-block' : 'd-none'
                            }`}
                          src={item.image}
                          width="800"
                          height="800"
                          onLoad={() => setIsImageLoaded(true)}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-center col l4 s12">
                  <div className="equipmentTitle">
                    <div className="titleImg">
                      <img src={`${equip_title_bg}`} alt="" />
                    </div>
                    <h3>EQUIPAMENTOS</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="marcar">
          <Appointments sala={db[sala]} />
        </Element>
        <Footer />
      </div>
    </>
  )
}
export default Studios
