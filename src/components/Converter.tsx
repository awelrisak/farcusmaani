import { useState, useEffect, useRef, ChangeEvent } from "react";
import { toOsmaniAlphabet, toLatinAlphabet } from "../utils";
import ClipboardIcon from "../icons/ClipboardIcon";
import ClipboardCheckedIcon from "../icons/ClipboardCheckedIcon";
import ConvertIcon from "../icons/ConvertIcon";

const Converter = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState(true);
  const [copyState, setCopyState] = useState("idle");

  const timeOutRef = useRef<number | null>(null);

   
  useEffect(() => {
    return () => {
      if (timeOutRef.current != null) {
        clearTimeout(timeOutRef.current);
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
        timeOutRef.current = setTimeout(() => {
          setCopyState("idle");
        }, 2400);
      })
      .catch((error) => console.log("error"));
  };

  return (
    <section className="mb-16 ">
      <h2 className="p-4 border-l-4 border-l-white text-white text-3xl font-bolder my-4 sm:w-[70%]">
        U bedel Fartaada Cusmaani / Laatiin.
      </h2>

      <button
        className="w-fit p-2 mb-1 text-white  font-bold flex space-x-2"
        onClick={() => setState((prev) => !prev)}
      >
        <span>{state ? "Laatiin" : "Cusmaani"}</span>
        <ConvertIcon />
        <span>{!state ? "Laatiin " : "Cusmaani"}</span>
      </button>

      <div className="relative h-[50vh] w-full  bg-slate-200 rounded-t-lg">
        <div className="h-10 width-full p-2 bg-slate-700 flex rounded-t-lg">
          <h2 className="text-slate-300 font-bold ">
            {state ? "Far laatiinigii" : "Far cusmaanigii"}
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
        <textarea
          className="absolute w-full h-[100%] border border-slate-500 outline-none p-2 mb-4 text-white bg-slate-500 rounded-none"
          placeholder={
            state ? "Halkan ku qor far laatiinka..." : "Halkan ku qor far cusmaaniga..."
          }
          onChange={handleChange}
          value={state ? toLatinAlphabet(text) : toOsmaniAlphabet(text)}
        />
      </div>
    </section>
  );
};

export default Converter;
