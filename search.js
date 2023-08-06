const lyrics = 'tmi bondhu kalaPakhi ami jeno ki. bosontokale tomy bolte parini. kala kala sada sada';
// const doesExist = lyrics.includes('kalapikhi');(case sensitive); if we want to ignore case then we have to use tolowercase while comparing two or more items;
const searchString = 'KALAPAKHI'
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLowerCase);

console.log(doesExist);
// index of; to find out last indexes; code: lastindexof
console.log(lyrics.indexOf('bondhu'));
console.log(lyrics.indexOf('bonu')); 
 

if(lyrics.indexOf('sada') !== -1 ) {
    console.log('exists inside the string');
}
else {
    console.log('cannot find it');
}
// startwith
console.log(lyrics.startsWith('tmi'));
// endswith
const fileName = ' mybiodata.pdf' ;
const otherFile = ' mypic.png' ;
fileName.endsWith(' .pdf');






// split-join.js
 console.log(lyrics)
 const spaceParts = lyrics.split( ' ');
 const sentences = lyrics.split('.') ;
 const characters = lyrics.split('');
 console.log(spaceParts) ;
 console.log(sentences);
 console.log(characters);
//  slice
const partial = lyrics.slice(4,7);
console.log(partial);
// substring
const partial2 = lyrics.substring(4,7);
console.log(partial2);
// array of multiple strings: 
const lines = [
    'tmi bondhu kalaPakhi ami jeno ki',
    'bosontokale tomy bolte parini',
    'kala kala sada sada'
  ];
  const newSong = lines.join('; ');
  console.log(newSong);