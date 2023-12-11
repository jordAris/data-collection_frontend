import { SideNavItem } from "@/types"
import Link from "next/link"
import { useState } from "react"


const SubMenu = ({item}: {item: SideNavItem}) => {
    const [subnav, setsubnav] = useState(false)
    const showSubnav = () => setsubnav(!subnav)
  return (
    <>
      <Link href= {item.path} onClick={item.subNav && showSubnav} className="bg-fourth px-5 py-3 max-w-[260px] max-h-[50px] px-12 flex items-center no-underline text-third text-lg hover:bg-third text-fourth cursor-pointer transition-all duration-200 ease-out">
        <div>
             {item.icon}
             <p>
                {item.title}
             </p>
        </div>
        <div>
            {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null
            }
        </div>
      </Link>
      {subnav && item.subNav?.map((item, index) => {
            return (
                <Link className="max-h-[50px] px-12 flex items-center no-underline text-third text-lg hover:bg-third text-fourth cursor-pointer transition-all duration-200 ease-out" href={item.path} key={index}>
                    {item.icon}
                    <p>
                        {item.title}
                    </p>
                </Link>
            )
        })
      }
    </>
  )
}

export default SubMenu
