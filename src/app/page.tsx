'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component';

const Page: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const [isImportSelected, setIsImportSelected] = useState(false);
    const toggleImportOptions = () => {
        setIsImportSelected(!isImportSelected);
    }

    useEffect(() => {
        const button = document.getElementById('import-button')

        button.addEventListener('mouseover', () => {
            setIsImportSelected(true);
        })

        button.removeEventListener('mouseout', () => {
            setIsImportSelected(false)
        })

        return () => {
            button.removeEventListener('mouseover', () => {
                setIsImportSelected(true)
            })

            button.removeEventListener('mouseout', () => {
                setIsImportSelected(false)
            })

        }
    }, [])

    const [columns] = useState([
        { name: 'Name', selector: 'name', sortable: true },
        { name: 'Email', selector: 'email', sortable: true },
        { name: 'Phone', selector: 'phone', sortable: true },
     ]);
    
     const [data] = useState([
        { name: 'John Doe', email: 'john.doe@gmail.com', phone: '555-555-5555' },
        { name: 'Jane Doe', email: 'jane.doe@gmail.com', phone: '555-555-5556' },
        // Additional data...
     ]);
    
     const handleRowSelected = (row: any) => {
        console.log('Row selected: ', row);
     };
  return (
    <div className="pt-[8%] pl-5 justify-between">
        <div className='flex justify-between'>
            <div className='relative inline-block text-left mb-3 justify-between'>
                <button onClick={toggleMenu} className='inline-flex items-center px-4 py-2 border border-fray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-third hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                    Choose a category
                    <ChevronDownIcon className='h-4 w-4' />
                </button>
                {isOpen && (
                    <div className='relative right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Option 1
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Option 2
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Option 3
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <div className='relative inline-block mr-10 text-left mb-3'>
                <button id='import-button' onClick={toggleImportOptions} className='inline-flex items-center px-4 py-2 border border-fray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-third hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                    Import from a File
                    <ChevronDownIcon className='h-4 w-4' />
                </button>
                {isImportSelected && (
                    <div className='relative right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
                        <div className="py-1 flex justify-between">
                            <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                <Image 
                                    priority
                                    src="/public/assets/excel-file-type_svgrepo.com.svg"
                                    width={50}
                                    height={50}
                                />
                                Excel File
                            </a>
                            <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                <Image 
                                    priority
                                    src="/public/assets/excel-file-type_svgrepo.com.svg"
                                    width={50}
                                    height={50}
                                />
                                PDF File
                            </a>
                        </div>
                    </div>
                )}
            
            </div>
      </div>
      <div className="md:w-[95%] ml-8 mt-5">
        <DataTable
            title="User Data"
            columns={columns}
            data={data}
            onRowSelected={handleRowSelected}
            selectableRows
            noHeader
            className="z-0"
        />
      </div> 
    </div>
  )
}

export default Page
