"use client"
/* eslint-disable react/jsx-no-undef */
import { ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ArrowRightOnRectangleIcon, BellAlertIcon, ChartBarSquareIcon, DocumentTextIcon, ExclamationCircleIcon, HomeIcon, PhoneIcon, TableCellsIcon, UserIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import sidebardata from "./sidebardata"
import SubMenu from "./SubMenu"
function Sidebar() {
  return (
    <div className="md:w-60 bg-primary flex-1 fixed flex-col h-screen items-center md:flex hidden rounded-lg shadow-xl">
      <div className="flex-1 space-y-12 items-center md:px-2">
        <div className="text-secondary my-2 font-h2 flex flex-row">
            <Image 
                src="/public/Logo_Arrdel-removebg-preview.png" 
                width={70}
                height={70}
                alt="logo"
            />
            <p>
                ArrdelBee Territorial
            </p>
        </div>
        <div className="bg-fourth shadow-md rounded flex flex-row space-x-2 items-center p-2 w-full">
             <Image
                className="p-2"
                src="/public/pp.svg"
                width={30}
                height={30}
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
