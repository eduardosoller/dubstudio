import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Studios from '../pages/Studios/Studios'
import Recordings from '../pages/Recordings/Recordings'
import Schedule from '../pages/Schedule/Schedule'
import AudioPlayer from '../components/AudioPlayer/AudioPlayer'
import { PlaylistProvider } from '../components/AudioPlayer/context/playlistContext'
import { scroller } from 'react-scroll'

export default function Routes() {
  function ScrollOnChangeRoute() {
    const { pathname, hash } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
      if (hash) {
        scroller.scrollTo(hash.substring(1), false, 0, 0, {
          duration: 1000,
          smooth: 'easeOut',
          isDynamic: true
        })
      }
    }, [pathname])
    return null
  }
  return (
    <BrowserRouter basename="/web">
      <ScrollOnChangeRoute />
      <PlaylistProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/estudios/:sala" component={Studios} />
          <Route path="/gravacao" component={Recordings} />
          <Route path="/agenda" component={Schedule} />
        </Switch>
        <AudioPlayer />
      </PlaylistProvider>
    </BrowserRouter>
  )
}
