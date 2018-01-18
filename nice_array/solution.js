function isNice(arr){
    let answer = true; //establish the true answer
    if (arr.length === 0) {
      return false;
    };
    for(i = 0; i < arr.length; ++i) {   //iterate through the array
      let arrayValue = arr[i];
      console.log('array value', arr[i]);
      if(!(arr.includes(arrayValue-1) || arr.includes(arrayValue+1))) {  //eval the logic
        answer = false;
      }
     } 
      return answer
    }