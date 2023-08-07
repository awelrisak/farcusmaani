import React, { useState, useEffect, useRef } from "react"

import { 
    toOsmaniaAlphabet, 
    toLatinAlphabet,
    } from "../utils"

import ClipboardIcon from "../icons/ClipboardIcon"
import ClipboardCheckedIcon from "../icons/ClipboardCheckedIcon"
import ConvertIcon from "../icons/ConvertIcon"

const Converter = () => {
  const [ text, setText ] = useState("");
  const [ state, setState ] = useState(true);
  const [ copyState, setCopyState ] = useState("idle");
  
  const timeOutRef = useRef(null)
  
  useEffect(() => {
   
   return () => {
    if (timeOutRef.current != null){
     clearTimeout(timeOutRef.current)
    }
   }
  }, [])
  
  const handleChange = (event) => {
   if ( copyState === "copied") setCopyState("idle")
   
    setText(event.currentTarget.value)    
  }
  
  const handleCopy = () => {
   if (!text){
     navigator.clipboard
        .writeText("Copied empty from Farcusmaani.com ")
        
        return
   }
   const toCopyText = state 
      ? toLatinAlphabet(text) 
       : toOsmaniaAlphabet(text)
   
    navigator.clipboard
        .writeText(`"${toCopyText}"\n--from Farcusmaani.com`)
        .then(() => {
         setCopyState("copied")
         
         
         timeOutRef.current = setTimeout(() => {
              setCopyState("idle")
         }, 2400)
         
          
        })
        .catch((error) => console.log("error"))
  }
  
  return (
  <section className="mb-16">
   
  
    <button
     className="w-fit p-2 mb-1 text-white  font-bold flex space-x-2"
     onClick={() => setState(prev => !prev)}
    >
        <span>{state ? "Laatiin" : "Cusmaani"}</span>
        <ConvertIcon />
        <span>{!state ? "Laatiin " : "Cusmaani"}</span>
    </button>
  
   
   {/*
    <div 
  className="mt-5 mb-4 flex items-center"
  >
  <span className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Cusmaani</span>
 
<label 

  className="relative inline-flex items-center cursor-pointer">
 
     <input 
       onChange={(e) => {
 
  setState(e.currentTarget.checked)
   
  }}
     checked={state}
     type="checkbox" 
     value="" 
     className="sr-only peer" />
      <div className="w-11 h-6 bg-purple-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-400"></div>
      <span className="ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">Laatiini</span>
    </label>
    </div>*/}
    
    <div
      className="relative h-[50vh] w-full  bg-slate-200 rounded-t-lg"
    > 
    <div
      className="h-10 width-full p-2 bg-slate-700 flex rounded-t-lg"
    >
    <h2
      className="text-slate-300 font-bold "
    > 
    {state ? "Far laatiinigii" : "Far cusmaanigii"} 
    </h2>
       <div
            className="p-1 ml-auto border border-slate-500 flex space-1 rounded-lg items-center text-white cursor-pointer "
            role="button"
            onClick={handleCopy}
          >
          
          {
            copyState == "idle" 
              ? <ClipboardIcon />
              : <ClipboardCheckedIcon />
          }
            
            <span
             className="text-xs text-white ml-1"
            >{ copyState=="idle" ? "copy" : "copied!" }</span>
          </div>
          
    </div>
    <textarea
    className="absolute w-full h-[100%] border border-slate-500 outline-none p-2 mb-4 text-white bg-slate-500 rounded-none"
      placeholder={state ? "Halkan ku qor far laatiinka..." : "Halkan ku qor far cusmaaniga..."}
      onChange={handleChange}
      value={state ? toLatinAlphabet(text) : toOsmaniaAlphabet(text) }
    />
    </div>
    </section>
  );
}

export default Converter