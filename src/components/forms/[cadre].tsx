"use client"
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Cadre: React.FC = () => {
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
    <div className="bg-gray-100 backdrop-blur-3xl p-5 overflow-y-auto rounded-lg shadow-sm w-[80%] ml-[10rem] h-[30rem]">
      <div className="border-b border-stroke py-4 px-6.5 mb-2">
        <h3 className="font-medium text-black ">
          Register a cadre
        </h3>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2.5" htmlFor="codeLocalite">
                Cadre Code
              </label>
              <input
                className="border-[1.5px] rounded w-full py-3 bg-transparent outline-none px-5 border-stroke shadow-sm text-gray-700 transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                id="CadreCode"
                {...register('CadreCode', { required: true })}
                type="number"
                min="1"
                placeholder="CadreCode"
                //value={formData.codeLocalite}
                onChange={handleChange}
              />
            </div>
            <div className="w-full xl:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2.5" htmlFor="Libelle">
                Level Cadre
              </label>
              <input
                className="border-[1.5px] rounded w-full py-3 bg-transparent outline-none px-5 border-stroke shadow-sm text-gray-700 transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                id="lvlCadre"
                {...register('lvlCadre', { required: true })}
                type="number"
                placeholder="Level Cadre"
                //value={formData.Libelle}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2.5" htmlFor="PNombreMenage">
              Cadre
            </label>
            <input
              className="border-[1.5px] rounded w-full py-3 bg-transparent outline-none px-5 border-stroke shadow-sm text-gray-700 transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
              id="cad"
              {...register('cadre', { required: true })}
              type="text"
              min="0"
              placeholder="Cadre"
              onChange={handleChange}
            />
          </div>
        </div>
        

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="access">
            acessible
          </label>
          <select name="access" id="access">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          
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

export default Cadre;