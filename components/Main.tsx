import MusicBanner from './MusicBanner'
import MusicCard from './MusicCard'

const Main = () => {
  return (
    <div className="flex-1">
      <MusicBanner />
      <div className="flex py-10">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  )
}

export default Main
