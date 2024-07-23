

export const Buttom = ({ textCat }) => {
  return (
    <div className="flex justify-center">
      <button className="border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white font-bold" onClick={textCat}>Get new fact</button>
    </div>
  )
}


