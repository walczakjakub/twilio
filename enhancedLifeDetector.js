const number = process.argv[2];

if (number === '0'){
  console.log('alive')
}
else if (number === '1'){
  console.log('flowering')
}
else if (number === '2'){
  console.log('shedding')
}
else {
  console.log('other')
};