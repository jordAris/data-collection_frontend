import { SideNavItem } from "@/types"
import Link from "next/link"
import { useState } from "react"


const SubMenu = ({item}: {item: SideNavItem}) => {
    const [subnav, setsubnav] = useState(false)
    const showSubnav = () => setsubnav(!subnav)
  return (
    <>
      <Link href= {item.path} onClick={item.subNav && showSubnav}>
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
                <Link href={item.path} key={index}>
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
