let a = 100
for(let i = 2; i<= a; i++){
  let f = true
  for (let j = 2 ; j < i ;j++){
    if(i%j== 0){
      f = false
      break
    }
    }
  if(f){
      console.log(i)
  }
}