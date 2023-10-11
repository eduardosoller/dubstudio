import React from 'react'

import './style.css'
import flags from '../../assets/img/flags.png'
import vinil from '../../assets/img/shophome-vinil.png'
import disco from '../../assets/img/disco.png'
export default function shopHome() {
  return (
    <section id="shopHome">
      <div className="row flex-row">
        <div id="containerShopImage" className="col s12 l6">
          <header>
            <h3>LOJA</h3>
            <a className="linkShop" href="https://dubstudio.com.br/loja">
              VISITAR LOJA
            </a>
          </header>
          <div className="featured-image">
            <img
              loading="lazy"
              src={disco}
              alt=""
            />
          </div>
        </div>
        <div id="containerShopInfo" className="col s12 l6">
          <div className="inner">
            <h4>VOLUME 11</h4>
            <p className="bands">
              <b>LP EM VINIL 180g – MÚSICAS INÉDITAS (2016)</b>
              <br />
              <span> 01 </span>OS REPLICANTES <span>02</span> MONSTRO MOTOR
              <span>03</span> SPACE RAVE
              <span> 04 </span>WALVERDES <span>05</span> GANGUE DINAMITE
              <span> 07 </span>LOOMER <span>08</span> LAUTMUSIK <span>09</span>
              DATING ROBOTS
              <span> 10 </span>GERIATRIO <span>11 </span> PLANONDAS
            </p>
            <p>
              Coletânea de Rock gravada, mixada e masterizada para LP em Vinil
              180g com músicas inéditas das bandas que ensaiam no Dub Studio.
            </p>
          </div>
          <div className="buy-action">
            <div className="price">
              <p className="price-value">R$50,00</p>
              {/* <p class="payment-conditions">Em até 12x no cartão de crédito</p> */}
            </div>
            <a
              href="https://www.dubstudio.com.br/loja/produto/27"
              className="shop-link"
            >
              COMPRAR
            </a>
          </div>
          <div className="payment-flags">
            <img src={flags} alt="Pagseguro bandeiras" />
          </div>
          <img className="bg" src={vinil} alt="" />
        </div>
      </div>
    </section>
  )
}
