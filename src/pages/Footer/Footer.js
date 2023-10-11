import React from 'react'
import './style.css'
import carimbo from '../../assets/img/carimbo-roxo.png'
import { WhatsIcon } from '../../components/Svg/Icons'
export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col l3 s12">
          <address>
            <div className="footer-title">
              <h4>ENDEREÇO</h4>
              <hr />
            </div>

            <p>
              Rua José do Patrocínio, 1218, Cidade Baixa
              <br />
              Porto Alegre - RS - Brasil
            </p>
          </address>
        </div>
        <div className="col l3 s12">
          <address>
            <div className="footer-title">
              <h4>HORÁRIO</h4>
              <hr />
            </div>
            <p>
              Segunda a Sábado das 16h às 24h.
              <br />
              Domingos somente para Gravação por Canal.
            </p>
          </address>
        </div>
        <div className="col l3 s12">
          <address>
            <div className="footer-title">
              <h4>CONTATO</h4>
              <hr />
            </div>
            <p>
              <a
                href="https://wa.me/555130227495"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsIcon className="whats-icon" />
                51 3022 7495
              </a>
              <a
                href="mail:studiodub@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="small material-icons">email</i>
                studiodub@gmail.com
              </a>
            </p>
          </address>
        </div>
        <div className="col l3 s12">
          <img className="carimbo" width="180" height="180" src={carimbo} alt="stamp" />
        </div>
      </div>
    </footer>
  )
}
