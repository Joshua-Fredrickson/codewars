function createPhoneNumber(numbers){
  const regex = /,/g;
  const subst = ``;

  let areaCode = numbers.slice(0,3).toString();
  let centralOfficeCode = numbers.slice(3,6).toString();
  let lineNumber = numbers.slice(6).toString();

  let fixedAreaCode = areaCode.replace(regex, subst);  
  let fixedCentralOfficeCode = centralOfficeCode.replace(regex, subst);  
  let fixedLineNumber = lineNumber.replace(regex, subst);  

  let forTheWin = '(' + fixedAreaCode + ") " + fixedCentralOfficeCode + "-" + fixedLineNumber;
  return forTheWin;
}