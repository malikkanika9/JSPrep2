

let i=1;

function toggler(x,y,z){

return function fun(){

    if(i==1){
        console.log(x);
        
    }if(i==2){
        console.log(y);
        
    }
    if(i==3){
        console.log(z);
        
    }

    if(i==3)
    {
        i=0;
    }
    i++;
}


}
let toggle=toggler(1,2,3);


toggle();
toggle();
toggle();


let x=10;
let y=0;
while(x<13||y<=2){
    x++;
    y+=2
}console.log(y)