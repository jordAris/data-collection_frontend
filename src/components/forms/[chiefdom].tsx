"use client"
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Chiefdom: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('http://localhost:8080/api/zones/zone', data);
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.name, e.target.value);
  };

  const handleSubmitForm = (data: any) => {
    onSubmit(data);
  };

  return (
    <div className="bg-third p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-6">Enregistrer une Zone</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Zone">
            Zone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Zone"
            {...register('codeLocalite', { required: true })}
            type="text"
    
            placeholder="Entrer le nom de la Zone"
            //value={formData.codeLocalite}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ZNiveau">
            ZNiveau
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ZNiveau"
            {...register('ZNiveau', { required: true })}
            type="text"
            placeholder="Entrer le ZNiveau"
            //value={formData.Libelle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NbDepartement">
            Nombre de département
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NbDepartement"
            {...register('NbDepartement', { required: true })}
            type="number"
            min="0"
            placeholder="Entrer le nombre de département"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NbCommune">
           Nombre de Commune
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NbCommune"
            {...register('NbCommune', { required: true })}
            type="number"
            min="1"
            placeholder="Entrer le nombre de Commune"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NbLocalite">
            Nombre de Localité
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NbLocalite"
            {...register('NbLocalite', { required: true })}
            type="number"
            min="0"
            placeholder="Entrer le Nombre de Localité"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Superficies">
            Superficie
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Superficies"
            {...register('Superficies', { required: true })}
            type="number"
            placeholder="Entrer la Superficies"
            onChange={handleChange}
          />
        </div>
        
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enregistrer
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Chiefdom;