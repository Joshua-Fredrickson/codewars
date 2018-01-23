function cubeOdd(arr) {
    //evaluate every index if divisable by 2.. or has a remainder
    
    //if TRUE create a new array with only odd numbers
    
    //cube then sum the array
    
    if (arr.find((x)=> typeof(x) === "string")){ return undefined}
     else { return arr.filter((x)=> x%2===1 || x%2=== -1).map(x=>x*x*x).reduce( (a,x)=>a + x);}
    
    }