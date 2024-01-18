import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

const Locality: React.FC = () => {

    const [data, setData] = useState<any[]>([]);
    const columns : TableColumn<any>[] = [
        { name: 'Code Localité', selector: row => row.codeLocalite, sortable: true },
        { name: 'Libellé', selector: row => row.libelle , sortable: true },
        { name: '%Nombre de Ménage', selector: row => row.PNombreMenage , sortable: true },
        { name: 'Pourcentage population', selector: row => row.PPolutaion, sortable: true },
        { name: 'IEE Code Maternelle', selector: row => row.IEEcodeMaternelle, sortable: true },
        { name: 'IEE Code Primaire', selector: row => row.IEEcodePrimaire, sortable: true },
        { name: 'IEE Code Secondaire', selector: row => row.IEEcodeSecondaire, sortable: true },
    ];

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

export default Locality
