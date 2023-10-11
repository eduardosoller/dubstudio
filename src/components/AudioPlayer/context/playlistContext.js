import React, { createContext, useState } from 'react'
export const PlaylistContext = createContext()

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([])

  const addMusicToPlaylist = music => {
    const found = playlist.find(item => item.musicId === music.musicId)
    if (found) {
      const tempList = playlist.filter(item => item.musicId !== music.musicId)
      setPlaylist([music, ...tempList])
    } else {
      setPlaylist([music, ...playlist])
    }
  }

  return (
    <>
    <PlaylistContext.Provider
      value={{ playlist, setPlaylist, addMusicToPlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
    </>
  )
}
