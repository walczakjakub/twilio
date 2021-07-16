const plantStatus = process.argv[2];
const plantDryness = process.argv[3];

if((plantStatus === '0') && (plantDryness > '10')){
  console.log('WATER');
};