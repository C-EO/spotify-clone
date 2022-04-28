import { HeartIcon } from '@heroicons/react/outline'

const MusicBanner = () => {
  return (
    <div className="h-[300px] w-full rounded-2xl bg-gradient-to-bl from-[#673AB7] to-[#512DA8] py-24 px-10">
      <h2 className="text-4xl  font-bold text-white">R&B hits</h2>
      <p className=" py-5 text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing
        <br /> elit. Amet velit aspernatur dolorum nam, voluptatibus quos?
      </p>
      <div className="flex items-center space-x-5">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-gray-600">
          <HeartIcon className="h-6 text-white" />
        </div>
        <p className="text-lg font-bold text-gray-300">21,212 Likes</p>
        <p className="text-sm font-bold text-gray-300">3 hours , 200 songs</p>
      </div>
    </div>
  )
}

export default MusicBanner
