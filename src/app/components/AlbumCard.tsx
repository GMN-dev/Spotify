export default function AlbumCard() = {
    return(
    <a href="#" className='bg-white/10 hover:bg-white/40 transition-colors rounded overflow-hidden flex gap-4 items-center group'>
        <Image alt='album' width={104} height={104} src="/led.jpg" />
        <strong>Led Zeppelin</strong>
        <button className='bg-green-400 text-black shadow-xl rounded-full w-12 h-12 flex items-center justify-center pl-1 ml-auto mr-6 invisible group-hover:visible'>
            <Play />
        </button>
    </a>)
};