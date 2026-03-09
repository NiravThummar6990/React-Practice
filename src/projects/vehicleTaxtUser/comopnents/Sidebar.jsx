import { LayoutDashboard, Library, Shell, SlidersHorizontal, UserRoundCog, X } from 'lucide-react'
import React from 'react'
import { useGlobal } from '../provider/GlobalProvider'

const Sidebar = () => {
  const {openSidebar,setOpenSidebar}=useGlobal();
  return (
<>
    <div className=' sm:h-screen  md:w-54 border-r pl-6  text-left  bg-white'>

        <div className=' border-b  '>
          <div className='flex justify-end md:hidden'><button  onClick={()=>setOpenSidebar(!openSidebar)}><X/></button></div>
         <div className='flex justify-center items-center gap-4 p-4'>
         <div> <div className='w-12 h-12 overflow-hidden rounded-full'><img src="/images/Drdologo.jpeg" alt="drdo logo" /></div></div>
          <div>
            <h1 className='font-bold text-xl'>DRDO</h1>
            <p className='text-[10px] text-neutral-500 font-semibold'>Defence Research & Development Organisation</p>
          </div>
         </div>         
        </div>
        <div className='p-2 m-2 h-screen '>
          {SidebarMenu?.map((e)=>{
          return(
            <div key={e?.name} className='flex gap-4 pt-4 pb-4 pr-4 items-center cursor-pointer'>
              <span>{e?.icon}</span>
              <span>{e?.name}</span>
            </div>
          )})}
        </div>

    </div>
</>
)
}

export default Sidebar


const SidebarMenu = [
  {
    icon : <LayoutDashboard />,
    name : "Dashboard"
  },
  {
    icon : <Library/>,
    name : "Questions Bank"
  },
  {
    icon :<SlidersHorizontal /> ,
    name : "Attributes"
  },
  {
    icon :<Shell /> ,
    name : "Compentencies"
  },
  {
    icon : <UserRoundCog />,
    name : "Roles"
  },
]