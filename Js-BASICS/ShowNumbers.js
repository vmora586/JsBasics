shownNumbers(10);

function shownNumbers(limit){
    if(limit<=0)return 'Not Valid Number';

    for(let i=0; i<=limit; i++){
        const message=i%2===0?'Even':'Odd';
        console.log(i,message);
    }
}