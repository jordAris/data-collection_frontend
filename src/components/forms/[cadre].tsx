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
          <div className="mb-4.5">
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
          <div className="mb-4.5">
            <label className="block text-gray-700 text-sm font-bold mb-2.5" htmlFor="access">
              Accessible
            </label>
            <div className="relative z-20 bg-transparent">
              <select name="access" id="access" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            
            
          </div>
        </div>
        
        <button className="flex w-full justify-center rounded mt-10 bg-primary p-3 font-medium text-gray">
            Submit
        </button>
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