function abbrevName(name){
    var n = name.split(" ");
    var a =  n[n.length - 1];
    var lowerCase = (name.substring(0,1) + '.' + a.substring(0,1));
    var upperCase = lowerCase.toUpperCase();
    return(upperCase)
    };