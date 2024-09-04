import './index.css'
export default function App() {
  return (
    <div className="grid grid-rows-[1fr_3fr_1fr] h-screen">
    <header className='grid grid-rows-2 border-solid border-black-500 bg-slate-600 text-orange-200'>
    <h1 className="text-center m-auto">Hello World</h1>
    <nav className="flex justify-end mr-4  text-orange-300">
      <a href="#">about</a>
      <a href="#" className='ml-4'>contact</a>
    </nav>
    </header>

   <main className="border border-solid border-green-500 grid justify-center bg-orange-600">
   <p className='text-lime-200 text-center m-auto'>Hello to the tech world</p>
   </main>

   <footer className='grid grid-rows-1 bg-lime-900 text-yellow-500'>
   <p className="text-center m-auto">Reach me @blabla</p>
   </footer>
  </div>
  )
}
