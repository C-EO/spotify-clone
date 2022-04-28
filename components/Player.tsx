import { PlayIcon, PauseIcon } from '@heroicons/react/solid'
import { useEffect, useRef, useState } from 'react'

const Player = () => {
  const ref = useRef<HTMLAudioElement>()

  const [isPlaying, setPlaying] = useState(false)
  const [duration, setDuration] = useState<number | undefined>(0)
  const [currentTime, setCurrentTime] = useState<number | undefined>(0)
  const [seekTime, setSeekTime] = useState<number | undefined>(0)

  const PlayPause = () => {
    setPlaying(!isPlaying)
    if (isPlaying) {
      ref.current?.play()
    } else {
      ref.current?.pause()
    }
  }

  useEffect(() => {
    setDuration(Math.floor(ref.current?.duration))
  }, [ref.current?.onloadeddata, ref.current?.readyState])

  const calculateTime = (secs: number) => {
    const miniutes = Math.floor(secs / 60)
    const returnMiniutes = miniutes < 10 ? `0${miniutes}` : `${miniutes}`
    const seconds = Math.floor(secs % 60)
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnMiniutes} : ${returnSeconds}`
  }

  return (
    <div className="absolute bottom-0 flex w-full items-center p-8">
      <audio controls autoPlay className="w-full">
        <source src="/order-99518.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Player
