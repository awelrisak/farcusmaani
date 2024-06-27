import { useState, useEffect, useRef, ChangeEvent } from "react";
import { toOsmaniAlphabet, toLatinAlphabet } from "../utils";
import ClipboardIcon from "../icons/ClipboardIcon";
import ClipboardCheckedIcon from "../icons/ClipboardCheckedIcon";
import ConvertIcon from "../icons/ConvertIcon";

const Converter = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState(true);
  const [copyState, setCopyState] = useState("idle");
  //const [pasteState, setPasteState] = useState("idle");

  const copyTimeOutRef = useRef<number | null>(null);
  const pasteTimeOutRef = useRef<number | null>(null);
   
  useEffect(() => {
    return () => {
      if (copyTimeOutRef.current != null) {
        clearTimeout(copyTimeOutRef.current);
      }
       if (pasteTimeOutRef.current != null) {
        clearTimeout(pasteTimeOutRef.current);
      }
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (copyState === "copied") setCopyState("idle")
    setText(event.currentTarget.value);
  };

  const handleCopy = () => {
    if (!text) {
      navigator.clipboard.writeText("Copied empty from Farcusmaani.com");
      return;
    }
    const toCopyText = state ? toLatinAlphabet(text) : toOsmaniAlphabet(text);

    navigator.clipboard
      .writeText(toCopyText)
      .then(() => {
        setCopyState("copied");
        copyTimeOutRef.current = setTimeout(() => {
          setCopyState("idle");
        }, 2400);
      })
      .catch((error) => console.log("error"));
  };
  
  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setText(text)
      })
      .catch((error) => console.log("error"));
  };

  return (
    <article className="mb-16 ">
      
      <button
        className="w-fit rounded-sm py-2 px-4 mb-2 bg-blue-600 text-white  font-bold flex space-x-2"
        onClick={() => setState((prev) => !prev)}
      >
        <span>{state ? "Laatiin" : "Cusmaani"}</span>
        <span>&#8646;</span>
        <span>{!state ? "Laatiin " : "Cusmaani"}</span>
      </button>
      
 <div className="flex flex-col sm:flex-row gap-4 ">
      <section className="relative h-[50vh] w-full  bg-slate-200 rounded-lg ">
        <div className="h-10 width-full p-2 bg-gray-700 flex rounded-t-lg">
          <h2 className="text-slate-300 font-bold ">
            {state ? "Laatiin" : "Cusmaani"}
          </h2>
          <div
            className="p-1 ml-auto border border-slate-500 flex space-1 rounded-lg items-center text-white cursor-pointer "
            role="button"
            onClick={handlePaste}
          >
            <ClipboardIcon /> 
            <span className="text-xs text-white ml-1">
              paste
            </span>
          </div>
        </div>
        <textarea
          className="w-full h-[calc(100%-2.5rem)] outline-none p-2 mb-4 text-white bg-slate-500  rounded-t-none rounded-b-lg"
          placeholder={
            (state 
            ? "Halkan ku qor far laatiinka..." 
            : "Halkan ka eeg far cusmaaniga..."
            )
          }
          onChange={handleChange}
          value={!state ? toOsmaniAlphabet(text) : toLatinAlphabet(text)}
          
        />
         
      </section>
      {/*
      <section
        className="relative h-[50vh] w-full  bg-slate-200 rounded-t-lg"
      >
           <div className="h-10 p-2 bg-slate-800 flex rounded-t-lg">
          <h2 className="text-slate-300 font-bold ">
            {state ? "Far cusmaanigii" : "Far laatiinkii"}
          </h2>
          <div
            className="p-1 ml-auto border border-slate-500 flex space-1 rounded-lg items-center text-white cursor-pointer "
            role="button"
            onClick={handleCopy}
          >
            {copyState == "idle" ? <ClipboardIcon /> : <ClipboardCheckedIcon />}
            <span className="text-xs text-white ml-1">
              {copyState == "idle" ? "copy" : "copied!"}
            </span>
          </div>
        </div>
        <p
           className="absolute w-full h-[100%] outline-none p-2 mb-4 text-white white bg-slate-700 rounded-none rounded-b-lg text-md overflow-x-none overflow-y-auto "
        >
          { !text && (
            <span
              className="text-slate-500 font-md "
            >
              Meel madhan.
            </span>
          )}
          { state ? toOsmaniAlphabet(text) : toLatinAlphabet(text)}
         </p>
      </section>*/}
      </div>
    </article>
  );
};

export default Converter;
