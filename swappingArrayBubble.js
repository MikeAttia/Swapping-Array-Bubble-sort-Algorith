let num=[12,5,-6,9,-2,-3,8,17];
let temp;
for(let i=0;i<=num.length;i++){
    for(j=0;j<=num.length-1;j++){
        if(num[j]<num[j+1]){
            temp=num[j];
            num[j]=num[j+1];
            num[j+1]=temp;
        }
    }
    console.log(num);
}
console.log('----------');
console.log(num);