import { SearchIcon } from '@heroicons/react/outline'

const Header: React.FC = () => {
  return (
    <header className="flex items-center px-10 py-5">
      <div>
        <h2 className="text-xl font-bold text-white">ArCloud</h2>
      </div>
      <div className="flex px-32">
        <SearchIcon className="h-6 text-white" />
        <input
          placeholder="search music"
          className="bg-black px-4 font-semibold text-white placeholder-slate-100 focus:outline-none"
        />
      </div>
    </header>
  )
}

export default Header
