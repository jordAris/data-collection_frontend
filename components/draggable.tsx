"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Draggable = () => {
  const router = useRouter();
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

//   function handleSubmitFile(e: any) {
//     if (files.length === 0) {
//       // no file has been submitted
//     } else {
//       // write submit logic here
//     }
//   }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }
  return (
    <div className="flex flex-col bg-[#6896D3] items-center h-[80%] w-full border-rose-800 p-6 ">
      <div className="flex items-center justify-between w-full px-6 mb-4">
        <p className="font-bold text-lg">Communes</p>
        <p>Help</p>
      </div>
      <form
        className=" w-full h-full flex flex-col items-center justify-between"
        action={(e) => {
            // Prendre en parametre le lien de redirection et le placer ici
          router.push("/communes/step-2");
        }}
      >
        <div className="flex justify-evenly w-[40%] items-center">
          <div className="text-[#FBB601]">{`   ---------   `}</div>
          <div
            className={`rounded-full bg-white h-6 w-6 flex items-center justify-center text-[#356BB3]`}
          >
            1
          </div>
          <div className="text-[#FBB601]">{`   ---------   `}</div>
          <div
            className={`rounded-full b bg-[#356BB3] text-white h-6 w-6 flex items-center justify-center`}
          >
            2
          </div>
          <div className="text-[#FBB601]">{`   ---------   `}</div>
        </div>
        <div
          className={`${
            dragActive ? "bg-blue-400" : "bg-blue-100"
          }  p-4  w-[80%] h-[80%] mx-4  rounded-md  text-center flex flex-col items-center justify-center`}
          onDragEnter={handleDragEnter}
          onSubmit={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
        >
          {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
          <input
            placeholder="fileInput"
            className="hidden"
            ref={inputRef}
            type="file"
            multiple={true}
            onChange={handleChange}
            accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
          />

          <p>
            Drag the file you want to import here or{" "}
            <span
              className="font-bold text-blue-600 cursor-pointer"
              onClick={openFileExplorer}
            >
              <u>Select files</u>
            </span>{" "}
            to upload
          </p>

          <div className="flex flex-col items-center p-3">
            {files.map((file: any, idx: any) => (
              <div key={idx} className="flex flex-row space-x-5">
                <span>{file.name}</span>
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => removeFile(file.name, idx)}
                >
                  remove
                </span>
              </div>
            ))}
          </div>

          {/* <button
          className="bg-black rounded-lg p-2 mt-3 w-auto"
          onClick={handleSubmitFile}
        >
          <span className="p-2 text-white">Submit</span>
        </button> */}
        </div>
        <div className="w-[80%] flex justify-end">
          <button
            className="shadow-xl bg-[#356BB3] p-2 text-white rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Draggable;
