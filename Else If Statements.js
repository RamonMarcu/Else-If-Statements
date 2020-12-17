// example no.1:

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
  } else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')

  
} else {
  console.log('Invalid season.');
}


// if run the code block (example no.1), the result will be: Invalid season.


// example no.2:

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
  } else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
}

  
 else {
  console.log('Invalid season.');
}


// if run the code block (example no.2), the result will be: It's sunny and warm because it's summer!
