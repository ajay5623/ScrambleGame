
   let renval = document.querySelector('.disRan');
   const inputvalue = document.querySelector('input');
   let yourscore = document.querySelector('.score');

   let  country=["China" , "India" ,"	United States","Indonesia","Pakistan","Brazil","Bangladesh","Russia	","Mexico","Japan","Iran","	Germany","Thailand","United Kingdom","	France","Italy","South Africa","Kenya","Ghana"];
   let newword=" ";
   let randomword=" ";
   let newranword;
    let scorevalue=0;

const createNewWord=()=>{
let ranNum=Math.floor(Math.random()*country.length);
let newTempsword = country[ranNum];
    return newTempsword;
}

const scrambleword=(arr)=>{
  for(let i=arr.length ; i>0;i--){
    let temp = arr[i]
    let j =Math.floor(Math.random()*(i+1));
     arr[i] = arr[j];
     arr[j]=temp;
  }
   return arr;
}

function get(){
  newword = createNewWord();
   randomword = scrambleword(newword.split(""));
    newranword =(randomword.join(""));
    renval.innerHTML=newranword;
       
}

    function result(){
      let tempw = inputvalue.value;

        if(newword===tempw){
           
            renval.innerHTML=`Your guess is right.please generate next word `;
            scorevalue += 10 ;
           yourscore.innerHTML = scorevalue;     
           
          

          }
          else{
           renval.innerHTML=`Your guess is incorrect please try again.. ${newranword}`;
             scorevalue -= 5;
             yourscore.innerHTML = scorevalue;
          }

    }
         

      