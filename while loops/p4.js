let i = 1
let n = 100
let s = 0 
let c = 0
while(i<=100){
  if((i%2)==0){
    s = s+i
    c++
  }
  i++
}
s = s/c
console.log(s)