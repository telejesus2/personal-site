import YouTube, { YouTubeProps } from 'react-youtube';


type VideoProps = {
  id: string
}

export default function Example(prop: VideoProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '330',
    width: '440',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={prop.id} opts={opts} onReady={onPlayerReady} />;
}
