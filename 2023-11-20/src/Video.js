import { useState } from 'react';
import './Video.css';


function Video({ videoID, autoplay, color, controls, thumbnail }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return thumbnail && !showPlayer ? 
    <>
      <img 
        src={thumbnail} 
        onClick={() => setShowPlayer(true)}
      />
    </>
  : 
    <>
      {videoID ? 
          <iframe 
            width="560" 
            height="315" 
            src={'https://www.youtube.com/embed/' + videoID + '?autoplay=' + 
                      (autoplay ? 1 : 0) + '&color=' + 
                      (color === 'red' ? 'red' : 'white') + 
                      '&controls=' + controls
                      
                } 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
          :
          <img src="https://picsum.photos/560/315" />
      }
    </>
}

export default Video;
