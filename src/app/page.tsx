'use client'
import { ChevronDownIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import 'animate.css/animate.min.css'
import { getFormComponent } from '@/constant/FormFactory/FormFactory';
import { getTableComponent } from '@/constant/DataTableFactory/DataTableFactory';

const Page: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const [isImportSelected, setIsImportSelected] = useState(false);
    const toggleImportOptions = () => {
        setIsImportSelected(!isImportSelected);
    }
    const [isFormOk, setFormOk] = useState(false);
    const toggleForm = () => {
        setFormOk(!isFormOk)
        if (isFormOk) {
            setTimeout(() => {
                const formContainer = document.getElementById('form-container')
                if (formContainer) {
                    formContainer.classList.remove('animate__fadeInDown')
                }
            }, 500)
        } else {
            const formContainer = document.getElementById('form-container')
            if (formContainer) {
                formContainer.classList.add('animate__animated', 'animate__fadeInDown')
            }
        }
    }

    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const renderForm = () => {
        if(selectedOption) {
            const FormComponent = getFormComponent(selectedOption);
            return FormComponent? <FormComponent /> : null;
        }
        return null;
    }

    const renderTable = () => {
        if(selectedOption) {
            const TableComponent = getTableComponent(selectedOption);
            return TableComponent? <TableComponent /> : null
        }
        return null;
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

  return (
    <div className="pt-10 pl-5 justify-between relative">
        <div className='flex justify-between relative'>
            <div className='relative ml-6 mb-3'>
                <select className="inline-flex items-center px-4 py-2 border overflow-auto border-fray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" onChange={(e) => setSelectedOption(e.target.value)}>
                    <option className="block px-4 p-5 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='locality'>
                        locality
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='cadre'>
                        cadre
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='TerritorialCollectivity'>
                        Territorial Collectivity
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='chiefdom'>
                        Chiefdom
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='region'>
                        Region
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='senator'>
                        Senator
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='zone'>
                        Zone
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='ZoneResource'>
                        Zone Resources
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Department'>
                        Department
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Governor'>
                        Governor
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Infrastructure'>
                        Infrastructure
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Minfrastructure'>
                        Minfrastructure
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Ministry'>
                        Ministry
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Country'>
                        Country
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Landscape'>
                        Urban Landscape
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='People'>
                        People
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='ZonePossibility'>
                        Zone Possibility
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='ZonePostential'>
                        Zone Potential
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Problems'>
                        Problems
                    </option>
                    <option className="block px-4 py-2 m-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" value='Sector'>
                        Sector
                    </option>
                </select>
            </div>
            <div className='relative mr-11 mb-3'>
                <button id='import-button' onClick={toggleImportOptions} className='inline-flex items-center px-4 py-2 border border-fray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-third hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                    Import from a File
                    <ChevronDownIcon className='ml-2 h-4 w-4' />
                </button>
                {isImportSelected && (
                    <div className='right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className="py-1 flex justify-between">
                            <a href="/import/step1" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                <Image 
                                    priority
                                    src={"/assets/excel-file-type_svgrepo.com.svg"}
                                    width={50}
                                    height={50}
                                />
                                Excel File
                            </a>
                            <a href="/import/step1" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                <Image 
                                    priority
                                    src={"/assets/pdf-file-type_svgrepo.com.svg"}
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
      <div className="md:w-[95%] ml-8 mt-5 relative">
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-gray-900"> Created on: {new Date().toISOString().slice(0, 10)}</p>
                </div>
                <button className='bg-primary hover:bg-third hover:text-fourth text-secondary font-bold py-2 px-4 rounded flex space-x-3' onClick={toggleForm}>
                    <PlusIcon className="h-6 w-6" />
                    <span>Add value</span>
                </button>
            </div>
        </div>
        {renderTable()}
      </div>
      {isFormOk && (
            <div id='form-container' className='relative items-center m-1 p-3 z-50 -top-[15rem]'>
                {renderForm()}
                <button className='bg-primary hover:bg-third hover:text-fourth text-secondary font-bold py-2 px-4 rouuded flex space-x-3 mt-5 float-left' onClick={toggleForm}>
                    <XMarkIcon className="h-6 w-6" />
                    <span>Cancel</span>
                </button>
            </div>  
        )}
    </div>
  )
}

export default Page
