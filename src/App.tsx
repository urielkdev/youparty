import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube'

function App() {
  const [playing, setPlaying]: any = useState(false);
  const [playedSeconds1, setPlayedSeconds1]: any = useState(0);
  const [playedSeconds2, setPlayedSeconds2]: any = useState(0);
  const player2 = useRef<ReactPlayer>(null);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <ReactPlayer
          width={720}
          height={440}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          controls={true}
          playing={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onProgress={value => {
            setPlayedSeconds1(value.playedSeconds)

            const timeDifference = playedSeconds1 > playedSeconds2 ? playedSeconds1 - playedSeconds2 : playedSeconds2 - playedSeconds1

            if (timeDifference > 4)
              player2.current?.seekTo(value.playedSeconds)
          }}
        />
        <div style={{ marginTop: 100 }}>
          <p>
            playing: {playing.toString()}
          </p>
          <p>
            player1 time: {playedSeconds1}
          </p>
          <p>
            player2 time: {playedSeconds2}
          </p>
        </div>

        <ReactPlayer
          ref={player2}
          width={720}
          height={440}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          controls={true}
          playing={playing}
          onProgress={value => setPlayedSeconds2(value.playedSeconds)}
        />
      </div>
    </div>
  );
}

export default App;
