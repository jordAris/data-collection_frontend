import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

const Senator: React.FC = () => {

    const [data, setDatasenateur] = useState<any[]>([]);
    const columns: TableColumn<any>[] = [
        { name: 'ID Sénateur', selector: row => row.idSenateur, sortable: true },
        { name: 'Qualité', selector: row => row.Qualite, sortable: true },
        { name: 'Nom', selector: row => row.Nom, sortable: true },
        { name: 'Prénom', selector: row => row.Prenom, sortable: true },
        { name: 'Mandat', selector: row => row.Mandat, sortable: true },
        { name: 'Élu Nomme', selector: row => row.Elu_Nomme, sortable: true },
    ];

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

export default Senator
