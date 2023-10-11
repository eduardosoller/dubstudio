import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import api from 'axios'
import { PlaylistContext } from '../../components/AudioPlayer/context/playlistContext'
import { ImagePlaceholder } from '../../components/ImagePlaceholder'

import NotFound from './components/NotFound'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { PlayIcon } from '../../components/Svg/Icons'
import './style.css'

function Player() {
  const { addMusicToPlaylist } = useContext(PlaylistContext)
  const [musicList, setMusicList] = useState([])
  const [allMusic, setAllMusic] = useState([])
  const [loadingMusicList, setLoadingMusicList] = useState(false)

  const [searchValue, setSearchValue] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const loadMusics = async() => {
      setLoadingMusicList(true)
      const response = await api.get(
        'https://dubstudio.com.br/loja/wp-json/wp/v2/music?per_page=100'
      )
      setAllMusic(response.data)
      setMusicList(response.data)
      setLoadingMusicList(false)
    }
    loadMusics()
  }, [])

  useEffect(() => {
    function FilterMusicList() {
      const term = searchValue.toString().toLowerCase()
      if (allMusic.length > 0) {
        setMusicList(allMusic.filter(
          item => item.artista.toString().toLowerCase().indexOf(term) > -1
        ).filter(item =>
          selectedType ? !item.tipo_de_gravacao.name.indexOf(selectedType) : item
        ))
      }
    }
    FilterMusicList()
  }, [selectedType, searchValue])

  function handleSelectType(value) {
    selectedType === value ? setSelectedType('') : setSelectedType(value)
  }
  return (
          <section id="containerPlayerHome">
          <div className="row">
          <div className="col s12 l12">
          <header>
          <h3>OUÇA AS GRAVAÇÕES</h3>
          <hr />
          </header>
          </div>
          </div>
          <div className="list_filters row">
          <div className="col s12 m12 l6">
          <div className="input-field player-search">
          <i className="material-icons">search</i>
          <input
          id="searchField"
          type="text"
          onChange={e => setSearchValue(e.target.value)}
          autoComplete='off'
          />
          <label htmlFor="searchField">Procure por banda ou artista</label>
          </div>
          </div>
          <div className="col s12 m12 l6">
          <nav>
          <ul>
          <li>
          <button
          className={selectedType === '' ? 'active' : null}
          onClick={() => handleSelectType('')}
          >
          Todas
          </button>
          </li>
          <li>
          <button
          className={selectedType === 'AO VIVO' ? 'active' : null}
          onClick={() => handleSelectType('AO VIVO')}
          >
          Ao vivo
          </button>
          </li>
          <li>
          <button
          className={selectedType === 'POR CANAL' ? 'active' : null}
          onClick={() => handleSelectType('POR CANAL')}
          >
          Por canal
          </button>
          </li>
          </ul>
          </nav>
          </div>

          </div>
          <div className="row">
          <div className="col s12">
          <div className="playlist-navbar">
          <div className="items-counter">
            {loadingMusicList
              ? 'Carregando músicas...'
              : `${musicList.length} músicas encontradas`
            }</div>
          <div className="playlist-navigation">
          <div className="playlist-prev">
          <FiChevronLeft />
          </div>
          <div className="playlist-next">
          <FiChevronRight />
          </div>
          </div>
          </div>
          </div>
          </div>
          <div className="row">
          <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerColumn: 2,
              slidesPerColumnFill: 1,
              slidesPerGroup: 2,
              spaceBetween: 20
            },
            800: {
              slidesPerView: 4,
              slidesPerColumn: 1,
              slidesPerGroup: 4,
              spaceBetween: 30
            },
            1300: {
              slidesPerView: 6,
              slidesPerColumn: 1,
              slidesPerGroup: 6,
              spaceBetween: 30
            }
          }}
          navigation={{
            nextEl: '.playlist-next',
            prevEl: '.playlist-prev'
          }}
          className="playlist col s12 m12 l12"
          >
          <NotFound show={loadingMusicList ? false : musicList.length < 1}/>
          {musicList.length > 0 &&
          musicList.sort((a, b) => a.artista.localeCompare(b.artista)).map((music, index) => {
            return (
                  <SwiperSlide key={index}>
                  <div
                  className="card"
                  onClick={() =>
                    addMusicToPlaylist({
                      musicId: music.id,
                      singer: music.artista,
                      name: music.title.rendered,
                      musicSrc: music.arquivo,
                      cover: music.capa
                    })
                  }
                  >
                  <div className="card-img">
                  <PlayIcon className="play-icon" />
                  {!isImageLoaded && <ImagePlaceholder />}
                  <img
                  className={`img img-fluid ${
                    isImageLoaded ? 'd-block' : 'd-none'
                  }`}
                  src={music.capa}
                  onLoad={() => setIsImageLoaded(true)}
                  alt=""
                  />
                  </div>
                  <div className="card-content">
                  <span>{music.tipo_de_gravacao.name}</span>
                  <h5 className="card-title truncate">{music.title.rendered}</h5>
                  <p className="card-text truncate">{music.artista}</p>
                  </div>
                  </div>
                  </SwiperSlide>

            )
          })
          }
                </Swiper>
                </div>
                </section>
  )
}
export default Player
