import { latinOsmaniyaSingles, latinOsmaniyaDoubles } from "../constants"

const singlesKeysRegex = new RegExp(Object.keys(latinOsmaniyaSingles).join('|'), 'gi');
const doublesKeysRegex = new RegExp(Object.keys(latinOsmaniyaDoubles).join('|'), 'gi');

const osmanyaSinglesKeysRegex = new RegExp(Object.values(latinOsmaniyaSingles).join('|'), 'gi');

const osmanyaDublesKeysRegex = new RegExp(Object.values(latinOsmaniyaDoubles).join('|'), 'gi');


export const toOsmaniaAlphabet = (text) => {
   const lt = text.toLowerCase()
   
   //convert first double letters
   let convertedText = lt.replace(doublesKeysRegex, (char) => {
     return latinOsmaniyaDoubles[char]
   })
    
     convertedText = convertedText.replace(singlesKeysRegex, (char) => {
     return latinOsmaniyaSingles[char]          
   })
   
    
    return convertedText
}

export const toLatinAlphabet = (text) => {
   const lt = text.toLowerCase()
   
   //convert first double letters
   
   let convertedText = lt.replace(osmanyaDublesKeysRegex, (char) => {
     for (var latinChar in latinOsmaniyaDoubles){
      if (latinOsmaniyaDoubles[latinChar] == char){
         return latinChar
      }
   }
   })
    
     convertedText = convertedText.replace(osmanyaSinglesKeysRegex, (char) => {
        for (var latinChar in latinOsmaniyaSingles){
      if (latinOsmaniyaSingles[latinChar] == char){
         return latinChar
      }
   }
   })
   
    
    return convertedText
}