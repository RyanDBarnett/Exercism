//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (chars) => {
  return chars.split('').map(char => {
    switch (char) {
      case 'G':
        return 'C';
        break;
      case 'C':
        return 'G';
        break;
      case 'T':
        return 'A';
        break;
      case 'A':
        return 'U';
        break;
      default:
        return '';
    }
  }).join('')
};
