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
    const [datacadre, setDatacadre] = useState<any[]>([]);   
    const [datachefferie, setDatachefferie] = useState<any[]>([]);
    const [datacollectivite, setDatacollectivite] = useState<any[]>([]);
    const [datadepartement, setDatadepartement] = useState<any[]>([]);
    const [datagouverneur, setDatagouverneur] = useState<any[]>([]);
    const [datainfrastructure, setDatainfrastructure] = useState<any[]>([]);
    const [dataminfrastructure, setDataminfrastructure] = useState<any[]>([]);
    const [dataministere, setDataministere] = useState<any[]>([]);
    const [datapays, setDatapays] = useState<any[]>([]);
    const [datapaysageub, setDatapaysageub] = useState<any[]>([]);
    const [datapossibilite, setDatapossibilite] = useState<any[]>([]);
    const [datapotentialite, setDatapotentialite] = useState<any[]>([]);
    const [dataprobleme, setDataprobleme] = useState<any[]>([]);

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

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/cadres')
            .then((response) => {
                setDatacadre(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/chefferies')
            .then((response) => {
                setDatachefferie(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/collectivites')
            .then((response) => {
                setDatacollectivite(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/departements')
            .then((response) => {
                setDatadepartement(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/gouverneurs')
            .then((response) => {
                setDatagouverneur(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/infrastructures')
            .then((response) => {
                setDatainfrastructure(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/minfrastructures')
            .then((response) => {
                setDataminfrastructure(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/ministeres')
            .then((response) => {
                setDataministere(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/paysageUrbains')
            .then((response) => {
                setDatapaysageub(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/pays')
            .then((response) => {
                setDatapays(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/possibilitesdezone')
            .then((response) => {
                setDatapossibilite(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/potentialites')
            .then((response) => {
                setDatapotentialite(response.data);
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/problemes')
            .then((response) => {
                setDataprobleme(response.data);
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

    const problemeColumns: TableColumn<any>[] = [
        { name: 'ID Probleme', selector: row => row.idProbleme, sortable: true },
        { name: 'Probleme', selector: row => row.Probleme, sortable: true },
        { name: 'Archive', selector: row => row.Archive, sortable: true },
    ];


    const potentialitesDesZonesColumns: TableColumn<any>[] = [
        { name: 'ID PotentialitesDesZones', selector: row => row.idPotentialitesDesZones, sortable: true },
        { name: 'Potentialite', selector: row => row.Potentialite, sortable: true },
        { name: 'Ressource', selector: row => row.Ressource, sortable: true },
    ];


    const possibiliteDeZoneColumns: TableColumn<any>[] = [
        { name: 'ID PossibiliteDeZone', selector: row => row.idPossibiliteDeZone, sortable: true },
        { name: 'Specification', selector: row => row.Specification, sortable: true },
        { name: 'Possibilite Emploi', selector: row => row.PossibiliteEmploi, sortable: true },
        { name: 'Axe Strategique', selector: row => row.AxeStrategique, sortable: true },
    ];

    const paysagesUrbainsColumns: TableColumn<any>[] = [
        { name: 'ID Paysages Urbains', selector: row => row.idPaysagesUrbains, sortable: true },
        { name: 'Unité Paysage', selector: row => row.UnitePaysage, sortable: true },
        { name: 'Utilisation', selector: row => row.Utilisation, sortable: true },
        { name: 'Potentialité', selector: row => row.Potentialite, sortable: true },
        { name: 'Utilisateur', selector: row => row.Utilisateur, sortable: true },
        { name: 'Problème', selector: row => row.Probleme, sortable: true },
        { name: 'Causes', selector: row => row.Causes, sortable: true },
        { name: 'Conséquences', selector: row => row.Consequences, sortable: true },
        { name: 'Solutions', selector: row => row.Solutions, sortable: true },
    ];


    const paysColumns: TableColumn<any>[] = [
        { name: 'Numéro d\'enregistrement', selector: row => row.NumEnregistrement, sortable: true },
        { name: 'Code Pays', selector: row => row.CodePays, sortable: true },
        { name: 'Libellé', selector: row => row.Libelle, sortable: true },
        { name: 'Masculin', selector: row => row.Masculin, sortable: true },
        { name: 'Féminin', selector: row => row.Feminin, sortable: true },
        { name: 'Total', selector: row => row.Total, sortable: true },
        { name: 'Accessible', selector: row => row.Accessible, sortable: true },
        { name: 'Date de création', selector: row => row.DateCreation, sortable: true },
        { name: 'Densité', selector: row => row.Densite, sortable: true },
        { name: 'Superficie', selector: row => row.Superficie, sortable: true },
        { name: 'Nombre de régions', selector: row => row.NbRegion, sortable: true },
        { name: 'Nombre de communes', selector: row => row.NbCommune, sortable: true },
        { name: 'Nombre de départements', selector: row => row.NbDepartement, sortable: true },
        { name: 'Nombre de localités', selector: row => row.NbLocalite, sortable: true },
        { name: 'Date d\'indépendance', selector: row => row.DateIndependance, sortable: true },
        { name: 'Date de réunification', selector: row => row.DateReunification, sortable: true },
        { name: 'Date d\'unification', selector: row => row.DateUnification, sortable: true },
    ];

    

    const ministereColumns: TableColumn<any>[] = [
        { name: 'ID Ministère', selector: row => row.idMinistere, sortable: true },
        { name: 'Désignation', selector: row => row.Designation, sortable: true },
        { name: 'Site Internet', selector: row => row.SiteInternet, sortable: true },
        { name: 'Localisation', selector: row => row.Localisation, sortable: true },
        { name: 'Ministère', selector: row => row.Ministere, sortable: true },
        { name: 'Secrétariat d\'État', selector: row => row.SecretariatEtat, sortable: true },
    ];


    const mInfrastructureColumns: TableColumn<any>[] = [
        { name: 'ID MInfrastructure', selector: row => row.idMInfrastructure, sortable: true },
        { name: 'MInfrastructure', selector: row => row.MInfrastructure, sortable: true },
    ];

    const infrastructureColumns: TableColumn<any>[] = [
        { name: 'ID Infrastructure', selector: row => row.idInfrastructure, sortable: true },
        { name: 'Libelle', selector: row => row.Libelle, sortable: true },
        { name: 'Etat', selector: row => row.Etat, sortable: true },
        { name: 'Quantité', selector: row => row.Qte, sortable: true },
        { name: 'Bénéficiaire', selector: row => row.Beneficiaire, sortable: true },
        { name: 'Observation', selector: row => row.Observation, sortable: true },
        { name: 'Groupe Infrastructure', selector: row => row.GroupeInfrastructure, sortable: true },
    ];


    const gouverneurColumns: TableColumn<any>[] = [
        { name: 'ID Gouverneur', selector: row => row.idGouverneur, sortable: true },
        { name: 'Nom Gouverneur', selector: row => row.NomGouverneur, sortable: true },
        { name: 'Prenom Gouverneur', selector: row => row.PrenomGouverneur, sortable: true },
        { name: 'Elu/Nomme', selector: row => row.Elu_Nomme, sortable: true },
    ];


    const departementColumns: TableColumn<any>[] = [
    { name: 'ID Département', selector: row => row.idDepartement, sortable: true },
    { name: 'Nom Département', selector: row => row.NomDepartement, sortable: true },
];

    const collectiviteTerritorialeColumns: TableColumn<any>[] = [
    { name: 'ID Collectivité Territoriale', selector: row => row.idCollectiviteTerritoriale, sortable: true },
    { name: 'Champ', selector: row => row.filed, sortable: true },
];

    const chefferieColumns: TableColumn<any>[] = [
    { name: 'ID Chefferie', selector: row => row.idChefferie, sortable: true },
    { name: 'Libellé Chefferie', selector: row => row.libelleChefferie, sortable: true },
    { name: 'Classification', selector: row => row.classification, sortable: true },
    { name: 'N Acte Déterminant', selector: row => row.nActeDeterminant, sortable: true },
    { name: 'Nom du Chef', selector: row => row.nomDuChef, sortable: true },
    { name: 'Qualification', selector: row => row.qualification, sortable: true },
    { name: 'Année au Trône', selector: row => row.anneAuTrone, sortable: true },
];

const cadreColumns: TableColumn<any>[] = [
    { name: 'ID Cadre', selector: row => row.idCadre, sortable: true },
    { name: 'Niveau', selector: row => row.cNiveau, sortable: true },
    { name: 'Cadre', selector: row => row.cadre, sortable: true },
    { name: 'Accessible', selector: row => row.accessible, sortable: true },
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
    }else if (selectedDataType === 'cadres') {
        selectedData = datacadre;
        selectedColumns = cadreColumns;
    }else if (selectedDataType === 'chefferies') {
        selectedData = datachefferie;
        selectedColumns = chefferieColumns;
    }else if (selectedDataType === 'collectivites') {
        selectedData = datacollectivite;
        selectedColumns = collectiviteTerritorialeColumns;
    }else if (selectedDataType === 'departement') {
        selectedData = datadepartement;
        selectedColumns = departementColumns;
    }else if (selectedDataType === 'gouverneur') {
        selectedData = datagouverneur;
        selectedColumns = gouverneurColumns;
    }else if (selectedDataType === 'infrastructure') {
        selectedData = datainfrastructure;
        selectedColumns = infrastructureColumns;
    }else if (selectedDataType === 'minfrastructure') {
        selectedData = dataminfrastructure;
        selectedColumns = mInfrastructureColumns;
    }else if (selectedDataType === 'ministere') {
        selectedData = dataministere;
        selectedColumns = ministereColumns;
    }else if (selectedDataType === 'pays') {
        selectedData = datapays;
        selectedColumns = paysColumns;
    }else if (selectedDataType === 'paysage') {
        selectedData = datapaysageub;
        selectedColumns = paysagesUrbainsColumns;
    }else if (selectedDataType === 'posssibilites') {
        selectedData = datapossibilite;
        selectedColumns = possibiliteDeZoneColumns;
    }else if (selectedDataType === 'potentialites') {
        selectedData = datapotentialite;
        selectedColumns = potentialitesDesZonesColumns;
    }else if (selectedDataType === 'probleme') {
        selectedData = dataprobleme;
        selectedColumns = problemeColumns;
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
                        <div className="relative right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1  overflow-y-auto h-[10rem] z-50  ring-black ring-opacity-5 focus:outline-none z-50">
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
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('cadres'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Cadres
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('chefferies'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Chefferies
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('collectivites'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Collectivite Territoriale
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('departement'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Département
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('gouverneur'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Gouverneur
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('infrastructure'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    infrastructure
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('minfrastructure'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                   minfrastructure
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('minsitere'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    minsitère
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('pays'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    pays
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('paysage'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Paysage Urbains
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('possibilites'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Possibilité de zones
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('potentialites'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Potentialités des zones
                                </a>
                                <a
                                    href="#"
                                    onClick={() => { setSelectedDataType('probleme'); toggleMenu(); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Problème
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
