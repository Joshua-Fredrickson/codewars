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

