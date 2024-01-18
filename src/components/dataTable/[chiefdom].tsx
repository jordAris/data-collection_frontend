import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

const Chiefdom: React.FC = () => {

    const [data, setDatachefferie] = useState<any[]>([]);
    const c: TableColumn<any>[] = [
        { name: 'ID Chefferie', selector: row => row.idChefferie, sortable: true },
        { name: 'Libellé Chefferie', selector: row => row.libelleChefferie, sortable: true },
        { name: 'Classification', selector: row => row.classification, sortable: true },
        { name: 'N Acte Déterminant', selector: row => row.nActeDeterminant, sortable: true },
        { name: 'Nom du Chef', selector: row => row.nomDuChef, sortable: true },
        { name: 'Qualification', selector: row => row.qualification, sortable: true },
        { name: 'Année au Trône', selector: row => row.anneAuTrone, sortable: true },
    ];

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

export default Chiefdom
