import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

const Zone: React.FC = () => {

    const [data, setDatazone] = useState<any[]>([]);
    const columns : TableColumn<any>[] = [
        { name: 'Id_Zone', selector: row => row.idZone, sortable: true },
        { name: 'Zone', selector: row => row.Zone , sortable: true },
        { name: 'Niveau', selector: row => row.ZNiveau , sortable: true },
        { name: 'Nombre de département ', selector: row => row.NbDepartement, sortable: true },
        { name: 'Nombre de commune', selector: row => row.NbCommune, sortable: true },
        { name: 'Nombre de Localité', selector: row => row.NbLocalite, sortable: true },
        { name: 'Superficie', selector: row => row.Superficies, sortable: true },
    ];

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

export default Zone
