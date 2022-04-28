import Image from 'next/image'

const MusicCard = () => {
  return (
    <div className="mx-4 space-y-2">
      <Image
        className="cursor-pointer rounded-2xl "
        src="/fire1.jpg"
        width={200}
        height={250}
      />
      <div>
        <h3 className="font-bold text-white">I Missed you</h3>
        <p className="text-gray-500">Arindam Roy </p>
      </div>
    </div>
  )
}

export default MusicCard
