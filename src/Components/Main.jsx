


export const Main = ({ catImage, fact }) => {

  return (
    <main className=" h-[800px] w-full min-w-[1100px] p-[30px] px-50 content-center flex justify-center">

    <div className="flex flex-col justify-center  items-center w-[900px] ">

       <figure className=" h-[600px] w-[600px] grid content-center">
        {catImage && ( 
            <img
            src={catImage}
            alt={`img cat containd three first word ${fact}`}
            className="rounded-xl h-[600px] w-[600px] object-contain"
          />)} 
        </figure>

    
        {fact && (
          <p className="p-6 text-center font-bold text-xl text-slate-400 ">
            {fact}
          </p>
        )}
    </div>
  </main>
  )
}


