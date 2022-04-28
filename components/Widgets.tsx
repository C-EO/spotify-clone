import Image from 'next/image'

const Widgets = () => {
  return (
    <div className="w-full max-w-[350px] ">
      <div className="flex justify-between px-6 text-sm">
        <p className="text-white">Playlist</p>
        <p className="text-gray-400">Album</p>
        <p className="text-gray-400"> Task</p>
      </div>
      <div>
        <div className="flex items-center justify-between p-4 text-white">
          <div className="flex items-center space-x-4 ">
            <Image
              src="/banner.jpeg"
              width={50}
              height={40}
              className="rounded-md"
            />
            <p>Lorem, ipsum.</p>
          </div>
          <p className="text-sm">23min</p>
        </div>
        <div className="flex items-center justify-between p-4 text-white">
          <div className="flex items-center space-x-4 ">
            <Image
              src="/banner.jpeg"
              width={50}
              height={40}
              className="rounded-md"
            />
            <p>Lorem, ipsum.</p>
          </div>
          <p className="text-sm">23min</p>
        </div>
        <div className="flex items-center justify-between p-4 text-white">
          <div className="flex items-center space-x-4 ">
            <Image
              src="/banner.jpeg"
              width={50}
              height={40}
              className="rounded-md"
            />
            <p>Lorem, ipsum.</p>
          </div>
          <p className="text-sm">23min</p>
        </div>
        <div className="flex items-center justify-between p-4 text-white">
          <div className="flex items-center space-x-4 ">
            <Image
              src="/banner.jpeg"
              width={50}
              height={40}
              className="rounded-md"
            />
            <p>Lorem, ipsum.</p>
          </div>
          <p className="text-sm">23min</p>
        </div>
      </div>
    </div>
  )
}

export default Widgets
