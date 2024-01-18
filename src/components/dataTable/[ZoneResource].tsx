import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

const ResourceZone: React.FC  = () => {

    const [data, setDataressourcezone] = useState<any[]>([]);
    const columns: TableColumn<any>[] = [
        { name: 'ID RessourcesZone', selector: row => row.idRessourcesZone, sortable: true },
        { name: 'Ressource', selector: row => row.Ressource, sortable: true },
        { name: 'Caractéristique', selector: row => row.Carateristique, sortable: true },
        { name: 'Utilisation Actuelle', selector: row => row.UtilisationActuelle, sortable: true },
        { name: 'Accès Contrôleur', selector: row => row.AccesControler, sortable: true },
        { name: 'Archive', selector: row => row.Archive, sortable: true },
    ];

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
  return (
    <div>
        <DataTable
            title="User Data"
            columns={columns}
            data={data}
            noHeader
        /> 
    </div>
  )
}

export default ResourceZone
