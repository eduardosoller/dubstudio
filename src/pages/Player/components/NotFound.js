
import React from 'react'
import notfound from '../../../assets/img/notfound.png'

function NotFound(props) {
  if (!props.show) return null
  return (<div className="notfound">
<div>
  <img src={notfound} alt="Not Found" />
  <p>Nenhuma banda ou artista encontrado.</p>
</div>
</div>)
}
export default NotFound
