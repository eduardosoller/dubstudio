import React, { useContext } from 'react'
import ReactMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

import { PlaylistContext } from './context/playlistContext'
import { customLocale } from './config/locale'
import './config/custom.css'

function AudioPlayer() {
  const { playlist, setPlaylist } = useContext(PlaylistContext)
  const onBeforeDestroy = (currentPlayId, audioLists, audioInfo) => {
    return new Promise((resolve, reject) => {
      if (window.confirm('Quer mesmo fechar o player?')) {
        resolve()
      } else {
        reject(new Error('notError: Não quer fechar o player'))
      }
    })
  }
  return (
  <>
  {playlist.length > 0
    ? (<ReactMusicPlayer
    glassBg
      showMediaSession
      clearPriorAudioLists={true}
      autoPlayInitLoadPlayList={true}
      audioLists={playlist}
      onAudioListsChange={(currentPlayId, audioLists) => {
        setPlaylist(audioLists)
      }}
      locale={customLocale}
      theme="dark"
      showDestroy={true}
      onBeforeDestroy={onBeforeDestroy}
      onDestroyed={() => setPlaylist([])}
      showDownload={false}
      showMiniProcessBar={false}
      showThemeSwitch={false}
      mode="full"
      mobileMediaQuery="(max-width: 992px)"
      defaultPosition={{ bottom: 0, left: 0 }}
    />) : null}
  </>
  )
}
export default AudioPlayer
