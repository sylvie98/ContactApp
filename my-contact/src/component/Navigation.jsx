

const Navigation = () => {
  return (
    <div className='bg-slate-400 flex  items-center justify-around'>
    <h1 className="text-3xl font-bold ">Contacts</h1>
    <a href='#'>Home</a>
    <div className="flex bg-slate-500 gap-3 rounded-lg border border-gray-400">
    <img src="https://icons.veryicon.com/png/o/internet--web/iview-3-x-icons/md-contact.png" alt="logo" className=" w-10"/>
    <div>
    <p>Sylvie</p>
    <a href="#">sylviemasengesho5@gmail.com</a>
    </div>
    <button className=" rounded-lg border border-gray-400 bg-black text-white h-8 mt-5 mb-5">Sign out</button>
    </div>
    
   
   </div>
  )
}

export default Navigation