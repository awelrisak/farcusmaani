import { latinOsmaniyaSingles, latinOsmaniyaDoubles } from "../constants";

const singlesKeysRegex = new RegExp(Object.keys(latinOsmaniyaSingles).join('|'), 'gi');
const doublesKeysRegex = new RegExp(Object.keys(latinOsmaniyaDoubles).join('|'), 'gi');

const osmanyaSinglesKeysRegex = new RegExp(Object.values(latinOsmaniyaSingles).join('|'), 'gi');

const osmanyaDoublesKeysRegex = new RegExp(Object.values(latinOsmaniyaDoubles).join('|'), 'gi');

export const toOsmaniaAlphabet = (text: string): string => {
  const lt = text.toLowerCase();

  // Convert first double letters
  let convertedText = lt.replace(doublesKeysRegex, (char: string) => {
    return latinOsmaniyaDoubles[char];
  });

  convertedText = convertedText.replace(singlesKeysRegex, (char) => {
    return latinOsmaniyaSingles[char];
  });

  return convertedText;
};

export const toLatinAlphabet = (text: string): string => {
  const lt = text.toLowerCase();

  // Convert first double letters
  let convertedText = lt.replace(osmanyaDoublesKeysRegex, (char: string) => {
    for (const latinChar in latinOsmaniyaDoubles) {
      if (latinOsmaniyaDoubles[latinChar] === char) {
        return latinChar;
      }
    }
    return char;
  });

  convertedText = convertedText.replace(osmanyaSinglesKeysRegex, (char: string) => {
    for (const latinChar in latinOsmaniyaSingles) {
      if (latinOsmaniyaSingles[latinChar] === char) {
        return latinChar;
      }
    }
    return char;
  });

  return convertedText;
};
