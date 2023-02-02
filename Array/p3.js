let a = [0,2,1,2,3,4,5,6,4,3,5,7,8,9,10]
let s = 0;
let c = 0;
for(i=1;i<a.length;i++){
  if(a[i]%2==0){
    s+=a[i];
    c++;
  }
}
console.log(s/c);