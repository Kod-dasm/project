import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { UserMediaError, useUserMedia } from '@vardius/react-user-media'

function Call() {
  const video = React.createRef()
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then(stream => {
      if (video.current) {
        video.current.srcObject = stream
        video.current.play()
      }
    })
  return <video autoPlay id="video" width="120" height="120" ref={video} />
}

export default Call
