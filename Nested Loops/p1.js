for(let i = 1 ;i<=12;i++){
    if(i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i==12)
    {
      for(let j = 1 ; j<32 ;j++)
    {
        console.log(j+"-"+i)
    }
    }
    else if (i == 2)
    {
      for(let j = 1 ; j<29 ;j++)
    {
        console.log(j+"-"+i)
    }
    }
      else 
    {
      for(let j = 1 ; j<31 ;j++)
    {
        console.log(j+"-"+i)
    }
    }
  }  
  