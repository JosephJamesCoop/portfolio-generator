const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

// //these compress into this
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;


// These are the same just new writing style
// const printProfileData = profileDataArr => {
//     for (let i=0; i<profileDataArr.length; i++) {
//     console.log(profileDataArr[i])
//     }
// };

// const printProfileData = profileDataArr => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };



// const fs = require('fs'); 
// was required at the top of the page in order to make this work.
fs.writeFile('index.html', generatePage(name, github), err => {
    if(err) throw new Error(err);
    
    console.log('Portfolio complete! Check out index.html to see the output!');
});


