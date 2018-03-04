function forLoop(array){
  var newArray=array
  for (let i=0; i<25; i++){
    if (i===1){
      newArray.push("I am "+${i}+" strange loop.")
    }
    else{
      newArray.push("I am "+${i}+" strange loops.")
    }
  }
  return newArray
}
