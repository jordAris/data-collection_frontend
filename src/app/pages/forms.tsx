"use client"
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Forms: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('http://localhost:8080/api/localites/localite', data);
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
    <div className="bg-third p-5 overflow-y-auto rounded-lg shadow-sm w-full h-[30rem]">
      <h2 className="text-xl font-semibold mb-3">Enregistrer une Localité</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codeLocalite">
            Code Localité
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="codeLocalite"
            {...register('codeLocalite', { required: true })}
            type="number"
            min="0"
            placeholder="Code Localité"
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PNombreMenage">
            Pourcentage Nombre de Menage
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pNombreMenage"
            {...register('PNombreMenage', { required: true })}
            type="number"
            min="0"
            placeholder="Pourcentage Nombre de Menage"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PPolutaion">
            Pourcentage Population
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pPopulation"
            {...register('PPolutaion', { required: true })}
            type="number"
            min="0"
            placeholder="Pourcentage Population"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="IEEcodeMaternelle">
            IEE Code Maternelle
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ieeCodeMaternelle"
            {...register('IEEcodeMaternelle', { required: true })}
            type="text"
            placeholder="IEE Code Maternelle"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="IEEcodePrimaire">
            IEE Code Primaire
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ieeCodePrimaire"
            {...register('IEEcodePrimaire', { required: true })}
            type="text"
            placeholder="IEE Code Primaire"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="IEEcodeSecondaire">
            IEE Code Secondaire
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ieeCodeSecondaire"
            {...register('IEEcodeSecondaire', { required: true })}
            type="text"
            placeholder="IEE Code Secondaire"
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

export default Forms;