'use client'
/* eslint-disable react/jsx-no-undef */
import { ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ArrowRightOnRectangleIcon, BellAlertIcon, ChartBarSquareIcon, DocumentTextIcon, ExclamationCircleIcon, HomeIcon, PhoneIcon, TableCellsIcon, UserIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import sidebardata from "./sidebardata"
import SubMenu from "./SubMenu"
function Sidebar() {
  return (
    <div className="md:w-60 bg-white md:flex h-screen items-center hidden rounded-lg shadow-md sticky">
      <div className="flex-1 space-y-5 items-center md:px-2">
        <div className="text-secondary font-h2 flex flex-row">
            <Image 
                src={"/assets/Logo_Arrdel-removebg-preview.png"}
                width={500}
                height={500}
                alt="logo"
            />
        </div>
        <div className="bg-fourth shadow-md rounded flex flex-row space-x-2 items-center p-2 w-full">
             <Image
                className="p-2"
                src={"/assets/pp.svg"}
                width={50}
                height={50}
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
        <div className="flex flex-col space-y-6 w-full">
              <div className="flex flex-col space-y-2">
                {sidebardata.map((item, index)=>{
                  return <SubMenu item={item} key={index} />
                })}
              </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
