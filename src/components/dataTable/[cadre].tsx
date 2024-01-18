import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

const Cadre: React.FC = () => {

    const [data, setDatacadre] = useState<any[]>([]); 
    const columns: TableColumn<any>[] = [
        { name: 'ID Cadre', selector: row => row.idCadre, sortable: true },
        { name: 'Niveau', selector: row => row.cNiveau, sortable: true },
        { name: 'Cadre', selector: row => row.cadre, sortable: true },
        { name: 'Accessible', selector: row => row.accessible, sortable: true },
    ];

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

export default Cadre
