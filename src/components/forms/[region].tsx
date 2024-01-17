"use client"
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Region: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('http://localhost:8080//api/regions/region', data);
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
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-6">Enregistrer une Région</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CodeRegion">
            Code Region
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="CodeRegion"
            {...register('CodeRegion', { required: true })}
            type="number"
            min="0"
            placeholder="Code Region"
            //value={formData.codeLocalite}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Libelle">
            Libellé
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="libelle"
            {...register('Libelle', { required: true })}
            type="text"
            placeholder="Libellé"
            //value={formData.Libelle}
            onChange={handleChange}
          />
        </div>

<div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Accessible">
          Accessible
        </label>
        <select {...register('Accessible')}>
          <option value="1">True</option>
          <option value="0">False</option>
        </select>
      </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="DateCreation">
            Date Creation de la Région
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="DateCreation"
            {...register('DateCreation', { required: true })}
            type="date"
           
            placeholder="Pourcentage Population"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Densite">
            Densite
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Densite"
            {...register('Densite', { required: true })}
            type="number"
            min="0"
            placeholder="Entrer la densité de la région"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Superficie">
            Superficie
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Superficie"
            {...register('Superficie', { required: true })}
            type="number"
            min="0"
            placeholder="Superficie de la région"
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

export default Region;