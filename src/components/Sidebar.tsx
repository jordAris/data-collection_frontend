/* eslint-disable react/jsx-no-undef */
import { ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ArrowRightOnRectangleIcon, BellAlertIcon, ChartBarSquareIcon, DocumentTextIcon, ExclamationCircleIcon, HomeIcon, PhoneIcon, TableCellsIcon, UserIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import sidebardata from "./sidebardata"
import SubMenu from "./SubMenu"
function Sidebar() {
  return (
    <div className="p-2 bg-primary flex flex-col h-screen items-center">
      <div className="flex-1">
        <div className="text-secondary font-h2 flex flex-row">
            <Image 
                src="../utils/Logo_Arrdel-removebg-preview.png" 
                width={70}
                height={70}
                alt="logo"
            />
            <p>
                ArrdelBee Territorial
            </p>
        </div>
        <div className="bg-steelblue shadow-md rounded flex flex-row profile">
             <Image
                src="../utils/pp.svg"
                width={33}
                height={33}
                alt = "profile"
             />
             <div className="text-third flex flex-col">
                <div className="flex-1">
                    <p className="font-h3">
                        Ingrid Monrow
                    </p>
                    <p className="font-h3">
                        Agent ArrdelBee
                    </p>
                </div>
             </div>
        </div>
        <div className="option">
            <nav>
              <div>
                {sidebardata.map((item, index)=>{
                  return <SubMenu item={item} key={index} />
                })}
              </div>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
