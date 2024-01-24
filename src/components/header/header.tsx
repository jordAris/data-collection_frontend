'use client'
import { BellAlertIcon } from "@heroicons/react/24/outline"


const Header = () => {
  return (
    <div className="bg-white h-20 w-[95%] flex justify-between items-center mx-5 shadow-md rounded-lg">
      <div className="pl-5 relative items-center">
        <span className="text-lg font-bold text-secondary">
          ArrdelBee    -
        </span>
        <span className="text-lg font-bold ml-4">
          Territorial Digital
        </span>
      </div>
      <div className="pr-5 relative items-center">
        <span className="text-sm font-medium text-gray-800">
          Alfred Toji
        </span>
        <span className="text-sm font-medium text-gray-800 ml-4">
          toji@gmail.com
        </span>
      </div>
    </div>
  )
}

export default Header
