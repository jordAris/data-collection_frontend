import { SideNavItem } from "@/types"
import Link from "next/link"
import React, { useState } from "react"


const SubMenu = ({item}: {item: SideNavItem}) => {
    const [subnav, setsubnav] = useState(false)
    const showSubnav = () => {setsubnav(!subnav)}
  return (
    <div>
      <button onClick={item.subNav && showSubnav} className="flex flex-row items-center rounded-lg no-underline w-full justify-between ">
        <div className="shadow-md text-third bg-fourth rounded w-full h-[50px] px-5 items-center flex flex-row space-x-6 hover:bg-third hover:text-fourth cursor-pointer transition-all duration-200 ease-out">
             {item.icon}
             <p className="font-h2 flex">
                {item.title}
             </p>
             <div className="relative right-[-50px]">
                {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null
                }
              </div>
        </div>

      </button>
      {subnav && item.subNav?.map((item, index) => {
            return (
                <Link className="shadow-md flex items-center no-underline text-third text-lg hover:bg-third text-fourth cursor-pointer transition-all duration-200 ease-out" href={item.path} key={index}>
                  <div className="shadow-md text-third bg-fourth rounded w-full h-[50px] px-5 items-center flex flex-row space-x-6 hover:bg-third hover:text-fourth cursor-pointer transition-all duration-200 ease-out">
                    {item.icon}
                    <p className="font-h2 flex">
                        {item.title}
                    </p>
                  </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default SubMenu
