import React from 'react'

const App = () => {
  return (
    <section>
    <div className=' bg-slate-400 flex  items-center  justify-around'>
     <h1 className="text-3xl font-bold ">Contacts</h1>
     <a href='#'>Home</a>
    </div>
    <div className='flex flex-col gap-4 justify-center items-center'>
      <p>ADD CONTACT</p>
      {/* <button className=' bg-black text-white'>Add new</button> */}
      
    </div>
    <div className='flex flex-col gap-4 justify-center items-center'>
      <label>Full Name</label>
    <div className='  border border-gray-400 w-1/2'>
    <input type='text' name='name'/>
    </div>
    <label>Email</label>
    <div className='  border border-gray-400 w-1/2'>
    <input type='text' name='name'/>
    </div>
    <label>Phone</label>
    <div className='  border border-gray-400 w-1/2'>
    <input type='text' name='name'/>
    </div>
    <label>Picture</label>
    <div className='  border border-gray-400 w-1/2'>
    <input type='text' name='name'/><button className='border border-gray-400 mt-4 mb-4'>Choose File</button> <button>No File Choosen</button>
   
    </div>
    <div className='  border border-gray-400 w-1/2 flex justify-center items-center bg-slate-500 text-white'>
    <input type='submit' name='name' value="Create"/>
    </div>
    </div>
    </section>
  )
}

export default App

