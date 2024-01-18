import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

const Region: React.FC  = () => {

    const [data, setDataregion] = useState<any[]>([]);
    const columns: TableColumn<any>[] = [
        { name: 'ID Code Region', selector: row => row.idCodeRegion, sortable: true },
        { name: 'Code Region', selector: row => row.CodeRegion, sortable: true },
        { name: 'Libelle', selector: row => row.Libelle, sortable: true },
        { name: 'Accessible', selector: row => row.Accessible, sortable: true },
        { name: 'Date Creation', selector: row => row.DateCreation, sortable: true },
        { name: 'Densite', selector: row => row.Densite, sortable: true },
        { name: 'Superficie', selector: row => row.Superficie, sortable: true },
    ];

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

export default Region
