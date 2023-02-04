
for (i =1;i<=10;i++){
    let p =""
    for (j=1;j<=10;j++){
     if(i==1 || i==10){
       p +="*"
     }
      else if(j
              ==1 || j==10){
       p +="*" 
      }else {
        p+=" "
      }
    }
    console.log(p)
  }
  