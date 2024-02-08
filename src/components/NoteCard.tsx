export function NoteCard() {
    return (
        <button className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-slate-400'>
          <span className=' text-sm font-medium text-slate-300'>2 dias</span>

          <p className=' text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum aliquid? Aut voluptatibus pariatur adipisci nobis blanditiis possimus rem quis reprehenderit fuga aperiam. Sequi, accusantium quia ea sed est optio!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam illo ex obcaecati similique, impedit molestias odit dolores doloribus! Quo quam autem dolore asperiores cupiditate quidem dolor reiciendis est iusto at!
          </p>

          <div className=' absolute bottom-0 left-0 right-0 h-1/2  pointer-events-none bg-gradient-to-t from-black/60 to-black/0' />
        </button>
    )
}