import React from 'react'
import Navigation from './Navigation'

const Addcontact = () => {
  return (
    <div>
    <Navigation/>
    <section className='flex  items-center  justify-around mt-10 flex-col'>
       <div>
      <p>ADD CONTACT</p>
    </div>
    <div className='flex flex-col gap-5'>
      <label>Full Name</label>
    <div className='rounded-lg  border border-gray-400 w-full h-10'>
    <input type='text' name='name'/>
    </div>
    <label>Email</label>
    <div className='rounded-lg  border border-gray-400  w-full h-10'>
    <input type='text' name='name'/>
    </div>
    <label>Phone</label>
    <div className='rounded-lg  border border-gray-400 w-full h-10'>
    <input type='text' name='name'/>
    </div>
    <div className='rounded-lg border border-gray-400 w-full flex justify-center items-center bg-slate-500 text-white h-10 mt-5'>
   <button type='#'>ADD CONTACT</button>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Addcontact























// import React from 'react'

// const Addcontact = () => {
//   return (
//     <>
//     <Navigation/>
//     <section className='flex  items-center  justify-around mt-10 flex-col'>
//        <div>
//       <p>ADD CONTACT</p>
//       {/* <button className=' bg-black text-white'>Add new</button> */}
      
//     </div>
//     <div className='flex flex-col gap-5'>
//       <label>Full Name</label>
//     <div className='rounded-lg  border border-gray-400 w-full h-10'>
//     <input type='text' name='name'/>
//     </div>
//     <label>Email</label>
//     <div className='rounded-lg  border border-gray-400  w-full h-10'>
//     <input type='text' name='name'/>
//     </div>
//     <label>Phone</label>
//     <div className='rounded-lg  border border-gray-400 w-full h-10'>
//     <input type='text' name='name'/>
//     </div>
//     <label>Picture</label>
//     <div className='rounded-lg  border border-gray-400 w-full h-10'>
//     <input type='text' name='name'/><button className='border border-gray-400 mt-2'>Choose File</button> <button>No File Choosen</button>
   
//     </div>
//     <div className='rounded-lg border border-gray-400 w-full flex justify-center items-center bg-slate-500 text-white h-10 mt-5'>
//     <a href='/delete' ><button>Create</button></a>
//     </div>
//     </div>
//     </section>
//     </>
//   );
// };

// export default Addcontact