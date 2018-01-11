//ToDo insert - between 2 odd numbers


//find a method that will locate 2 odd numbers together.
    //eval?  parseInt? 
    //separate the the values and .push into an array
    //make integer into a string
    //split the string
    //.push into a array
    //run a loop to inspect the logic
    //push the logic into an array to evaluate the conditions in which I will add the dash into the array
    //insert the - with splice at a certain index in the separatedString array.


    function insertDash(num) {
        var string = num.toString();
        var separatedString = string.split("");
        
        var logicCheck = []
        
        for(i=0; i<separatedString.length; i++) {
            var separatedNumber = separatedString[i];
          if (separatedNumber%2 == 0) {
              console.log(true);
            logicCheck.push('true');
            } else {
            console.log(false);
            logicCheck.push('false');
            }
        }; 
        console.log(logicCheck);
    };

