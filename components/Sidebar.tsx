import { HomeIcon, MusicNoteIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <aside className="w-full max-w-[300px] px-10">
      <h3 className="text-md py-2 font-bold">Browse Music</h3>
      <nav className="space-y-5 py-16">
        <div className="group flex cursor-pointer items-center  space-x-4 rounded-xl px-4 py-2  hover:bg-[#1A1A1A]">
          <HomeIcon className="h-6 text-gray-500 group-hover:text-white" />
          <h2 className="text-gray-500 group-hover:font-bold group-hover:text-white">
            Home
          </h2>
        </div>
        <div className="group flex cursor-pointer  items-center space-x-4 rounded-xl px-4 py-2 hover:bg-[#1A1A1A]">
          <MusicNoteIcon className="h-6 text-gray-500 group-hover:text-white" />
          <h2 className="text-gray-500 group-hover:font-bold group-hover:text-white">
            Album
          </h2>
        </div>
        <div className="group flex cursor-pointer  items-center space-x-4 rounded-xl px-4 py-2 hover:bg-[#1A1A1A]">
          <MusicNoteIcon className="h-6 text-gray-500 group-hover:text-white" />
          <h2 className="text-gray-500 group-hover:font-bold  group-hover:text-white">
            Tracks
          </h2>
        </div>
        <div className="group flex cursor-pointer  items-center space-x-4 rounded-xl px-4 py-2 hover:bg-[#1A1A1A]">
          <MusicNoteIcon className="h-6 text-gray-500 group-hover:text-white" />
          <h2 className="text-gray-500 group-hover:font-bold group-hover:text-white">
            Genre
          </h2>
        </div>
      </nav>
      <div className="py-8">
        <h2 className="font-semibold text-white">Library</h2>
        <div className="space-y-6 py-6 text-gray-400">
          <p className="cursor-pointer hover:font-bold hover:text-white">
            Recently Played
          </p>
          <p className="cursor-pointer hover:font-bold hover:text-white">
            Favourite Tracks
          </p>
          <p className="cursor-pointer hover:font-bold hover:text-white">
            Charts
          </p>
          <p className="cursor-pointer hover:font-bold hover:text-white">
            Radio
          </p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
