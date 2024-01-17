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
      <h2 className="text-xl font-semibold mb-3">Register a Locality</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codeLocalite">
            Locality Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="codeLocalite"
            {...register('codeLocalite', { required: true })}
            type="number"
            min="0"
            placeholder="Locality Code"
            //value={formData.codeLocalite}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Libelle">
            Wording
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="libelle"
            {...register('Libelle', { required: true })}
            type="text"
            placeholder="Wording"
            //value={formData.Libelle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PNombreMenage">
            Percentage Number of Households
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pNombreMenage"
            {...register('PNombreMenage', { required: true })}
            type="number"
            min="0"
            placeholder="Percentage Number of Households"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PPolutaion">
            Population percentage
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pPopulation"
            {...register('PPolutaion', { required: true })}
            type="number"
            min="0"
            placeholder="Population percentage"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="IEEcodeMaternelle">
            IEE Nursery Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ieeCodeMaternelle"
            {...register('IEEcodeMaternelle', { required: true })}
            type="text"
            placeholder="IEE Nursery Code"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="IEEcodePrimaire">
            IEE Primary Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ieeCodePrimaire"
            {...register('IEEcodePrimaire', { required: true })}
            type="text"
            placeholder="IEE Primary Code"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="IEEcodeSecondaire">
            IEE Secondary Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ieeCodeSecondaire"
            {...register('IEEcodeSecondaire', { required: true })}
            type="text"
            placeholder="IEE Secondary Code"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
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