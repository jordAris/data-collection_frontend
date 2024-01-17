"use client"
// Importez les bibliothèques nécessaires
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DataTable, { Selector, TableColumn } from 'react-data-table-component';

  

const Page: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isImportSelected, setIsImportSelected] = useState(false);
    const toggleImportOptions = () => {
        setIsImportSelected(!isImportSelected);
    };

    const [data, setData] = useState<any[]>([]);
    const [selectedFile, setSelectedFile] = useState<File | null>();


    const [datazone, setDatazone] = useState<any[]>([]);
    
    const [datasecteur, setDatasecteur] = useState<any[]>([]);
    const [datasenateur, setDatasenateur] = useState<any[]>([]);
    const [dataressourcezone, setDataressourcezone] = useState<any[]>([]);
    const [dataregion, setDataregion] = useState<any[]>([]);

    const [selectedDataType, setSelectedDataType] = useState('localites'); 
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/localites')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/zones')
            .then((response) => {
                setDatazone(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/senateurs')
            .then((response) => {
                setDatasenateur(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/secteurs')
            .then((response) => {
                setDatasecteur(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/ressourceszones')
            .then((response) => {
                setDataressourcezone(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/regions')
            .then((response) => {
                setDataregion(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);


    const columns : TableColumn<any>[] = [
        { name: 'Code Localité', selector: row => row.codeLocalite, sortable: true },
        { name: 'Libellé', selector: row => row.libelle , sortable: true },
        { name: '%Nombre de Ménage', selector: row => row.PNombreMenage , sortable: true },
        { name: 'Pourcentage population', selector: row => row.PPolutaion, sortable: true },
        { name: 'IEE Code Maternelle', selector: row => row.IEEcodeMaternelle, sortable: true },
        { name: 'IEE Code Primaire', selector: row => row.IEEcodePrimaire, sortable: true },
        { name: 'IEE Code Secondaire', selector: row => row.IEEcodeSecondaire, sortable: true },
    ];


    const columnzone : TableColumn<any>[] = [
        { name: 'Id_Zone', selector: row => row.idZone, sortable: true },
        { name: 'Zone', selector: row => row.Zone , sortable: true },
        { name: 'Niveau', selector: row => row.ZNiveau , sortable: true },
        { name: 'Nombre de département ', selector: row => row.NbDepartement, sortable: true },
        { name: 'Nombre de commune', selector: row => row.NbCommune, sortable: true },
        { name: 'Nombre de Localité', selector: row => row.NbLocalite, sortable: true },
        { name: 'Superficie', selector: row => row.Superficies, sortable: true },
    ];

    const columnsenateur: TableColumn<any>[] = [
        { name: 'ID Sénateur', selector: row => row.idSenateur, sortable: true },
        { name: 'Qualité', selector: row => row.Qualite, sortable: true },
        { name: 'Nom', selector: row => row.Nom, sortable: true },
        { name: 'Prénom', selector: row => row.Prenom, sortable: true },
        { name: 'Mandat', selector: row => row.Mandat, sortable: true },
        { name: 'Élu Nomme', selector: row => row.Elu_Nomme, sortable: true },
    ];

    const secteurColumns: TableColumn<any>[] = [
        { name: 'ID Secteurs', selector: row => row.idSecteurs, sortable: true },
        { name: 'Libellé', selector: row => row.Libelle, sortable: true },
    ];

    const ressourcesZoneColumns: TableColumn<any>[] = [
        { name: 'ID RessourcesZone', selector: row => row.idRessourcesZone, sortable: true },
        { name: 'Ressource', selector: row => row.Ressource, sortable: true },
        { name: 'Caractéristique', selector: row => row.Carateristique, sortable: true },
        { name: 'Utilisation Actuelle', selector: row => row.UtilisationActuelle, sortable: true },
        { name: 'Accès Contrôleur', selector: row => row.AccesControler, sortable: true },
        { name: 'Archive', selector: row => row.Archive, sortable: true },
    ];
    const regionColumns: TableColumn<any>[] = [
        { name: 'ID Code Region', selector: row => row.idCodeRegion, sortable: true },
        { name: 'Code Region', selector: row => row.CodeRegion, sortable: true },
        { name: 'Libelle', selector: row => row.Libelle, sortable: true },
        { name: 'Accessible', selector: row => row.Accessible, sortable: true },
        { name: 'Date Creation', selector: row => row.DateCreation, sortable: true },
        { name: 'Densite', selector: row => row.Densite, sortable: true },
        { name: 'Superficie', selector: row => row.Superficie, sortable: true },
    ];
    const handleRowSelected = (row: any) => {
        console.log('Row selected: ', row);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files!=null){setSelectedFile(files[0]);}
 
        console.log(selectedFile)
    };
    

    const handleImportSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedFile) {
            // Gérer le cas où aucun fichier n'a été sélectionné
            return;
        }
            const formData = new FormData();  
            formData.append('file', selectedFile);

            //console.log(response.data); // Afficher la réponse du backend en cas de réussite
            // Rafraîchir les données après l'importation
            console.log(formData)
            axios
                .post('http://localhost:8080/api/localites/import/pdf', formData)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
                });

                axios
                .post('http://localhost:8080/api/zones/import/pdf', formData)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
                });    
 
    };


    const ExcelSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedFile) {
            // Gérer le cas où aucun fichier n'a été sélectionné
            return;
        }
            const formData = new FormData();  
            formData.append('file', selectedFile);

            //console.log(response.data); // Afficher la réponse du backend en cas de réussite
            // Rafraîchir les données après l'importation
            console.log(formData)
            axios
                .post('http://localhost:8080/api/localites/import/excel', formData)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
                });

            axios
            .post('http://localhost:8080/api/zones/import/excel', formData)
            .then((response) => {
                setDatazone(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            }); 
            

            axios
            .post('http://localhost:8080/api/senateurs/import/excel', formData)
            .then((response) => {
                setDatasenateur(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });

            axios
            .post('http://localhost:8080/api/secteurs/import/excel', formData)
            .then((response) => {
                setDatasecteur(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });

            axios
            .post('http://localhost:8080/api/ressourceszones/import/excel', formData)
            .then((response) => {
                setDataressourcezone(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
            
            axios
            .post('http://localhost:8080/api/regions/import/excel', formData)
            .then((response) => {
                setDataregion(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
                
                
                
 
    };

    let selectedData;
    let selectedColumns;

    if (selectedDataType === 'localites') {
        selectedData = data;
        selectedColumns = columns;
    } else if (selectedDataType === 'zones') {
        selectedData = datazone;
        selectedColumns = columnzone;
    }else if (selectedDataType === 'senateurs') {
        selectedData = datasenateur;
        selectedColumns = columnsenateur;
    }else if (selectedDataType === 'secteurs') {
        selectedData = datasecteur;
        selectedColumns = secteurColumns;
    }else if (selectedDataType === 'ressourceszones') {
        selectedData = dataressourcezone;
        selectedColumns = ressourcesZoneColumns;
    }else if (selectedDataType === 'region') {
        selectedData = dataregion;
        selectedColumns = regionColumns;
    }




    return (
        <div className="pt-[8%] pl-5 justify-between">
            <div className="flex justify-between">
                <div className="relative inline-block text-left mb-3 justify-between">
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center px-4 py-2 border border-fray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-third hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                        Choose a category
                        
                        <ChevronDownIcon className="h-4 w-4" />
                    </button>
{/* 
                    <button
                        onClick={toggleImportOptions}
                        className="inline-flex items-center px-4 py-2 border border-fray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-third hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                        Import PDF
                        
                    </button>

 */}

                    {isOpen && (
                        <div className="relative right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            <div className="py-1">
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('localites'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                   Localités
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('zones'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Zones
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('senateurs'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Sénateurs
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('secteurs'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Secteurs
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('ressourceszones'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Ressources Zones
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('region'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Region
                                </a>
                            </div>
                        </div>
                    )}
                </div>


                <div className="relative inline-block mr-10 text-left mb-3">
                    <button
                        id="import-button"
                        onClick={toggleImportOptions}
                        className="inline-flex items-center px-4 py-2 border border-fray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-third hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                        Import from PDF
                        <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    {isImportSelected && (
                        <div className="relative right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            <form onSubmit={handleImportSubmit}>
                                <div className="py-1 flex justify-between">
                                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Import
                                        <input type="file" name="file" onChange={(e) => setSelectedFile(e.target.files?.[0])} />
                                    </label>
                                    <a
                                        href="#"
                                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        <Image
                                            priority
                                            src="/public/assets/pdf.jpeg"
                                            width={50}
                                            height={50} 
                                            alt={''}                                        />
                                        PDF File
                                    </a>
                                </div>
                                <button type="submit" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                    Importer
                                </button>
                            </form>
                        </div>
                    )}
                </div>



                <div className="relative inline-block mr-10 text-left mb-3">
                    <button
                        id="import-button"
                        onClick={toggleImportOptions}
                        className="inline-flex items-center px-4 py-2 border border-fray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-third hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                        Import from Excel
                        <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    {isImportSelected && (
                        <div className="relative right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            <form onSubmit={ExcelSubmit}>
                                <div className="py-1 flex justify-between">
                                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Import
                                        <input type="file" onChange={handleFileChange} />
                                    </label>
                                    <a
                                        href="#"
                                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        <Image
                                            priority
                                            src="/public/assets/pdf.jpeg"
                                            width={50}
                                            height={50} 
                                            alt={''}                                        />
                                        Excel File
                                    </a>
                                </div>
                                <button type="submit" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                    Importer
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            

            <div className="md:w-[95%] ml-8 mt-5">
                <DataTable
                    title="User Data"
                    columns={selectedColumns}
                    data={selectedData}
                    selectableRows
                    noHeader
                    className="z-0"
                />
            </div>
        </div>
    );
};

export default Page;
