import { latinOsmaniSingles, latinOsmaniDoubles } from "../constants";

const singlesKeysRegex = new RegExp(Object.keys(latinOsmaniSingles).join('|'), 'gi');
const doublesKeysRegex = new RegExp(Object.keys(latinOsmaniDoubles).join('|'), 'gi');

const osmaniSinglesRegex = new RegExp(Object.values(latinOsmaniSingles).join('|'), 'gi');

const osmaniDoublesRegex = new RegExp(Object.values(latinOsmaniDoubles).join('|'), 'gi');

export const toOsmaniAlphabet = (text: string): string => {
  const lt = text.toLowerCase() //toLatinAlphabet(text.toLowerCase())
  
  // Convert first double letters
  let convertedText = lt.replace(doublesKeysRegex, (char: string) => {
    return latinOsmaniDoubles[char];
  });

  convertedText = convertedText.replace(singlesKeysRegex, (char: string) => {
    return latinOsmaniSingles[char];
  });

  return convertedText;
};

export const toLatinAlphabet = (text: string): string => {
  
  
  // Convert double letters
  let convertedText = text.replace(osmaniDoublesRegex, (char: string) => {
    for (const latinChar in latinOsmaniDoubles) {
      if (latinOsmaniDoubles[latinChar] === char) {
        return latinChar;
      }
    }
    return char;
  });
   convertedText = convertedText.replace(osmaniSinglesRegex, (char: string) => {
    for (const latinChar in latinOsmaniSingles) {
      if (latinOsmaniSingles[latinChar] === char) {
        return latinChar;
      }
      else {
        continue
      }
    }
    return char;
  });
  
   

 

  return convertedText;
};
