'use client'
import { BellAlertIcon } from "@heroicons/react/24/outline"
import { Image } from "next/image";


const Header = () => {
  return (
    <header className="bg-primary shadow-md z-50">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="text-lg font-bold text-secondary">
              ArrdelBee    -
            </span>
            <span className="text-lg font-bold ml-4">
              Territorial Digital
            </span>
          </div>
          <div className="w-0 flex-1 flex items-center">
            <span className="text-sm font-medium text-gray-800">
              Alfred Toji
            </span>
            <span className="text-sm font-medium text-gray-800 ml-4">
              toji@gmail.com
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
