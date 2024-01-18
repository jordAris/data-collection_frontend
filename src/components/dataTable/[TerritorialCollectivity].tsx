import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

const TerritorialCollectivity: React.FC = () => {

    const [data, setDatacollectivite] = useState<any[]>([]);
    const columns: TableColumn<any>[] = [
        { name: 'ID Collectivité Territoriale', selector: row => row.idCollectiviteTerritoriale, sortable: true },
        { name: 'Champ', selector: row => row.filed, sortable: true },
    ];

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

export default TerritorialCollectivity
