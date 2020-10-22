let z = "12345";
let x= "6";

console.log(`Day so ${z.split("").join(",")}`);
for(let i = 0; i <= z.length;i++){
   for(let j = 0; j <= z.length;j++){
      if(Number(z[i])+Number(z[j])==x){
        if(i<j){
         console.log(`(${i},${j})`);
        }
      }
   }
}




