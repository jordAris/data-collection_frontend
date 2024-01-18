"use client"
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ZoneResource: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("http://localhost:8080/api/ressourceszones/ressourceszone", data);
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
      <h2 className="text-xl font-semibold mb-6">Enregistrer une Ressource Zone</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Ressource">
            Ressource
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Zone"
            {...register('Ressource', { required: true })}
            type="text"
    
            placeholder="Entrer le nom de la Ressource"
            //value={formData.codeLocalite}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Carateristique">
            Carateristique
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Carateristique"
            {...register('Carateristique', { required: true })}
            type="text"
            placeholder="Entrer les Carateristiques"
            //value={formData.Libelle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="UtilisationActuelle">
            Utilisation Actuelle
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="UtilisationActuelle"
            {...register('UtilisationActuelle', { required: true })}
            type="text"
            
            placeholder="Utilisation Actuelle"
            onChange={handleChange}
          />
        </div>
               <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="AccesControler">
          Access Controler
        </label>
        <select {...register('AccesControler')}>
          <option value="1">True</option>
          <option value="0">False</option>
        </select>
      </div>
      
    
       <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Archive">
          Archive
        </label>
        <select {...register('Archive')}>
          <option value="True">True</option>
          <option value="False">False</option>
        </select>
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

export default ZoneResource;