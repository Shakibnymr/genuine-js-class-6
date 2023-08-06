function getMaxNum(a, b, c){
    if (a > b && a > c)
        {return a;
     elseif( b > a && b > c)
       { return b}; }
    else
        {return c
} 
}
const maxNumber = getMaxNum(67,59,87);
console.log(maxNumber);