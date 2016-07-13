var sum = 0;
for (var i=0; i<process.argv.length; i++) {
  if (i >1) {
    //convert to Num and add to sum
    sum += Number(process.argv[i]);
  }
}
console.log(sum);
