import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Mic, ListMusic, Cast, Volume1, Maximize, Maximize2, SkipBack, SkipForward, Shuffle, RefreshCcw } from 'lucide-react'


export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className=' flex-1 '>
        
        <aside className='w-64 bg-zinc-950 p-6 fixed z-10' >  
          <nav className='space-y-4'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200' >
              <HomeIcon /> Home
            </a>        
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200' >
              <Search /> Search
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200' >
              <Library /> Library
            </a>
          </nav>
          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2 text-sm'>
            <a className='text-zinc-400 hover:text-zinc-100' href="">Top Brasil</a>
            <a className='text-zinc-400 hover:text-zinc-100' href="">Funk</a>
            <a className='text-zinc-400 hover:text-zinc-100' href="">Blues</a>
            <a className='text-zinc-400 hover:text-zinc-100' href="">Minha playlist</a>
          </nav>
        </aside>

        <main className='flex-1 p-4'> 
          <div className='flex space-x-2 items-center'>
            <button className=' p-1  bg-black/40 rounded-full '> <ChevronLeft /> </button>
            <button className=' p-1  bg-black/40 rounded-full '> <ChevronRight /> </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4 flex-grow'>
            
            <a href="#" className='bg-white/10 hover:bg-white/40 transition-colors rounded overflow-hidden flex gap-4 items-center group'>
              <Image alt='album' width={104} height={104} src="/led.jpg" />
              <strong>Led Zeppelin</strong>

              <button className='bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center pl-1 ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 hover:bg-white/40 transition-colors rounded overflow-hidden flex gap-4 items-center group'>
              <Image alt='album' width={104} height={104} src="/led.jpg" />
              <strong>Led Zeppelin</strong>

              <button className='bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center pl-1 ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 hover:bg-white/40 transition-colors rounded overflow-hidden flex gap-4 items-center group'>
              <Image alt='album' width={104} height={104} src="/led.jpg" />
              <strong>Led Zeppelin</strong>

              <button className='bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center pl-1 ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 hover:bg-white/40 transition-colors rounded overflow-hidden flex gap-4 items-center group'>
              <Image alt='album' width={104} height={104} src="/led.jpg" />
              <strong>Led Zeppelin</strong>

              <button className='bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center pl-1 ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 hover:bg-white/40 transition-colors rounded overflow-hidden flex gap-4 items-center group'>
              <Image alt='album' width={104} height={104} src="/led.jpg" />
              <strong>Led Zeppelin</strong>

              <button className='bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center pl-1 ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-xl mt-10'>Made by Gabriel Magalhães do Nascimento</h2>

          <div className='flex flex-row items-center mt-4 overflow-scroll gap-4'>
            <a href="#" className='bg-white/5 hover:bg-white/10 rounded w-44 p-3 group'>
              <div >
                <div className='relative'>
                  <button className='bg-green-400 text-black rounded-full shadow-lg absolute pl-1 bottom-2 right-2 w-12 h-12 flex items-center justify-center invisible  group-hover:visible '>
                    <Play />
                  </button>
                  <Image src="/hip.jpg" width={140} height={140} layout='responsive' className='rounded' />
                </div>
                <h3 className='pt-2 '> <strong> Hip Hop </strong></h3>
                <p className='text-white/40 text-sm'>Drake, Froid, 21Savage, Djonga...</p>
              </div>   
            </a>

            <a href="#" className='bg-white/5 hover:bg-white/10 rounded w-44 p-3 group'>
              <div >
                <div className='relative'>
                  <button className='bg-green-400 text-black rounded-full shadow-lg absolute pl-1 bottom-2 right-2 w-12 h-12 flex items-center justify-center invisible  group-hover:visible '>
                    <Play />
                  </button>
                  <Image src="/hip.jpg" width={140} height={140} layout='responsive' className='rounded' />
                </div>
                <h3 className='pt-2 '> <strong> Hip Hop </strong></h3>
                <p className='text-white/40 text-sm'>Drake, Froid, 21Savage, Djonga...</p>
              </div>   
            </a>

            <a href="#" className='bg-white/5 hover:bg-white/10 rounded w-44 p-3 group'>
              <div >
                <div className='relative'>
                  <button className='bg-green-400 text-black rounded-full shadow-lg absolute pl-1 bottom-2 right-2 w-12 h-12 flex items-center justify-center invisible  group-hover:visible '>
                    <Play />
                  </button>
                  <Image src="/hip.jpg" width={140} height={140} layout='responsive' className='rounded' />
                </div>
                <h3 className='pt-2 '> <strong> Hip Hop </strong></h3>
                <p className='text-white/40 text-sm'>Drake, Froid, 21Savage, Djonga...</p>
              </div>   
            </a>

            <a href="#" className='bg-white/5 hover:bg-white/10 rounded w-44 p-3 group'>
              <div >
                <div className='relative'>
                  <button className='bg-green-400 text-black rounded-full shadow-lg  absolute pl-1 bottom-2 right-2 w-12 h-12 flex items-center justify-center invisible  group-hover:visible '>
                    <Play />
                  </button>
                  <Image src="/hip.jpg" width={140} height={140} layout='responsive' className='rounded' />
                </div>
                <h3 className='pt-2 '> <strong> Hip Hop </strong></h3>
                <p className='text-white/40 text-sm'>Drake, Froid, 21Savage, Djonga...</p>
              </div>   
            </a>  
          
          </div>

        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700  p-6 fixed bottom-0 w-screen h-24 flex items-center justify-between'>
        <section className='flex gap-2'>
          <Image alt='album' width={40} height={40} src="/led.jpg" />
          <div className='flex flex-col justify-center'>
            <h3 className='text-sm font-semibold'>Stairway to Heaven</h3>
            <p className='text-xs text-zinc-500'>Led Zeppelin</p>
          </div>
        </section>
        <section className='flex flex-col gap-2 items-center justify-center'>
          <div className='flex gap-2 items-center justify-center'>
            <Shuffle />
            <SkipBack />
            <button className='bg-white text-black rounded-full pl-1 w-10 h-10 flex items-center justify-center '>
              <Play />
            </button>
            <SkipForward />
            <RefreshCcw />
          </div>

          <div className=''>
            <div className='p-1 w-96 bg-white rounded relative'>
              <div className='p-1 w-32 bg-green-400 rounded absolute top-0 left-0'></div>
            </div>
          </div>
         
        </section>
        <section className='flex gap-4'>
          <a href="">
            <Mic size={25}/>
          </a>

          <a href="">
            <ListMusic size={25}/>            
          </a>

          <a href="">
            <Cast size={25}/>            
          </a>

          <a href="" className='flex items-center justify-center'>
            <Volume1 size={25}/>
            <div className='w-20 h-1 bg-zinc-300'>
            </div>
          </a>

          <a href="">
            <Maximize2 size={25}/>            
          </a>
        </section>
      </footer>
    </div>
  )
}
