"use client"
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Senator: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("http://localhost:8080/api/senateurs/senateur", data);
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
      <h2 className="text-xl font-semibold mb-6">Enregistrer un sénateur</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Qualite">
            Qualite
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Qualite"
            {...register('Qualite', { required: true })}
            type="text"
    
            placeholder="Qualite"
            //value={formData.codeLocalite}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nom">
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Nom"
            {...register('Nom', { required: true })}
            type="text"
            placeholder="Entrer le nom du sénateur"
            //value={formData.Libelle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Prenom">
            Prenom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Prenom"
            {...register('Prenom', { required: true })}
            type="text"
            
            placeholder="Entrer le Prenom du sénateur"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Mandat">
           Mandat
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Mandat"
            {...register('Mandat', { required: true })}
            type="Text"
            
            placeholder="Mandat"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Elu_Nomme">
          Elu/Nomme
        </label>
        <select {...register('Elu_Nomme')}>
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

export default Senator;