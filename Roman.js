 var roInput= document.getElementById("figure");
  var nuInput= document.getElementById("roman");
  var result= document.getElementById("result");
  var convert1=document.getElementById("con1");
  var convert2=document.getElementById("con2");
  
  convert2.addEventListener("click",getNum)
  convert1.addEventListener("click", getRom);
  
  //Event to convert Number to Roman
  function getNum(e){
  roInput.style.display="block";
  nuInput.style.display="none";
  convert1.style.background="linear-gradient(to right,#007AFF,#999)";
  convert2.style.background="rgba(144,127,13,1)";
  convert2.style.fontSize="";
  convert1.style.fontSize="";
  }
  
  // Event to convert Roman to Number
  function getRom(e){
  roInput.style.display="none";
  nuInput.style.display="block";
  convert1.style.background="rgba(144,127,13,1)";
  convert2.style.background="linear-gradient(to right,#007AFF,#999)";
  convert2.style.fontSize="14px";
  convert1.style.fontSize="15px";
 }
  
  //function to convert to Number to Roman Numeral
  
  roInput.addEventListener("keyup", getRoman);
  nuInput.addEventListener("keyup", getNumber);
  
  function getRoman(e){
  var value = roInput.value;
  var finresult = (function convertToRoman(num){
  
  var Roman = {
  1:"I",5:"V",10:"X", 50:"L", 100:"C", 500:"D",
  1000:"M"}
  
  function lessHund(num){
  if(num <= 3){
  let one = Roman[1].repeat(num);
  return one;
  }
  
  else if(num == 4 || num == 40 || num == 400){
  switch(num){
  case 4: return Roman[1] + Roman[5];
  break;
  case 40: return Roman[10] + Roman[50];
  break;
  default: return Roman[100] + Roman[500]
  break;
  }
  }
  
  else if(num < 9){
  let mfive = num - 5;
  return Roman[5] + Roman[1].repeat(mfive)
  }
  
  else if(num == 9 || num == 90 || num == 900){
  switch(num){
  case 9: return Roman[1] + Roman[10];
  break;
  case 90: return Roman[10] + Roman[100];
  break;
  default: return Roman[100] + Roman[1000];
  break;
  }
  
  }else if(num < 40){
  let single =  num/10
  let singleRd = Math.floor(single)
  let singleDec = single - singleRd
  let updtDec = Math.round(singleDec*10)
  
  if(updtDec <= 3){
  return Roman[10].repeat(singleRd) + Roman[1].repeat(updtDec)
  }else if(updtDec == 4){
  return Roman[10].repeat(singleRd) + Roman[1] + Roman[5]
  }else if(updtDec < 9){
  let repmf = updtDec - 5;
  return Roman[10].repeat(singleRd) + Roman[5] + Roman[1].repeat(repmf)
  }else if(updtDec == 9){
  return Roman[10].repeat(singleRd) + Roman[1] + Roman[10]
  }else{
  return Roman[10].repeat(singleRd)
  }
  }
  
  else if(num < 50){
  let forty =  num/10
  let fortyRd = Math.floor(forty)
  let fortyDec = forty - fortyRd
  let decforty = Math.round(fortyDec*10)
  
  if(decforty <= 3){
  return Roman[10] + Roman[50] + Roman[1].repeat(decforty)
  }else if(decforty == 4){
  return Roman[10] + Roman[50] + Roman[1] + Roman[5]
  }else if(decforty < 9){
  let fortyRep = decforty - 5;
  return Roman[10] + Roman[50] + Roman[5] + Roman[1].repeat(fortyRep)
  }else{
  return Roman[10] + Roman[50] + Roman[1] + Roman[10]
  }
  }
  
  else if(num < 100 && num > 90){
  let ninety =  num/10
  let ninetyRd = Math.floor(ninety)
  let ninetyDec = ninety - ninetyRd
  let decNine = Math.round(ninetyDec*10)
  
  if(decNine <= 3){
  return Roman[10] + Roman[100] + Roman[1].repeat(decNine)
  }else if(decNine == 4){
  return Roman[10] + Roman[100] + Roman[1] + Roman[5]
  }else if(decNine < 9){
  let nineRep = decNine - 5;
  return Roman[10] + Roman[100] + Roman[5] + Roman[1].repeat(nineRep)
  }else{
  return Roman[10] + Roman[100] + Roman[1] + Roman[10]
  }
  }
  
  else if( num < 90){
  let mfifty = (num - 50)/10
  let fiftyRd = Math.floor(mfifty)
  let fiftyDec = mfifty - fiftyRd
  let decfifty = Math.round(fiftyDec*10)
  if(decfifty <= 3){
  return Roman[50] + Roman[10].repeat(mfifty) + Roman[1].repeat(decfifty)
  } else if(decfifty == 4){
  return Roman[50] + Roman[10].repeat(mfifty) + Roman[1] + Roman[5]
  }else if(decfifty < 9){
  let newfifty = decfifty - 5;
  return Roman[50] + Roman[10].repeat(mfifty) + Roman[5] + Roman[1].repeat(newfifty)
  }else if(decfifty == 9){
  
  return Roman[50] + Roman[10].repeat(mfifty) + Roman[1] + Roman[10]
  
  }
  }else {return Roman[num]}
  }
  // for 100 to 999
  function lessZand(num){
  if(num < 400){
  let hund = num/100
  let hundRd = Math.floor(hund)
  let hundDec = Math.round((hund - hundRd) * 100)
  let hundw = lessHund(hundDec)
  return Roman[100].repeat(hundRd) + hundw;
  
  }else if(num < 500){
  let hundf = num/100
  let hundRdf = Math.floor(hundf)
  let hundDecf = Math.round((hundf - hundRdf) * 100)
  let hundwf = lessHund(hundDecf)
  return lessHund(400) + lessHund(hundDecf)
  
  }else if(num < 900){
  let mhund = (num - 500)/100
  let mhundRd = Math.floor(mhund)
  let mhundDec = Math.round((mhund - mhundRd) * 100)
  let mhundw = lessHund(mhundDec)
  return Roman[500] + Roman[100].repeat(mhundRd) + lessHund(mhundDec)
  
  }else if(num < 1000){
  let nhund = num/100
  let nhundRd = Math.floor(nhund)
  let nhundDec = Math.round((nhund - nhundRd) * 100)
  let nhundw = lessHund(nhundDec)
  return lessHund(900) + lessHund(nhundDec)
  }
  else {return lessHund(num)}
  }
  //for 1000 to 3999
  if(num < 4000){
  let nzand = num/1000
  let nzandRd = Math.floor(nzand)
  let nzandDec = Math.round((nzand - nzandRd) * 1000)
  let nzandw = lessZand(nzandDec)
  return Roman[1000].repeat(nzandRd) + nzandw
  }else{return lessZand(num)}
  
  })(value)
 result.innerHTML=finresult;
 
  }
  
  //Convert Roman Numeral to Number
  
  function getNumber(e){
  var val = nuInput.value.toUpperCase();
  
  const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  };
 
  var finNum =(function romanToInt(s) {
  let accumulator = 0;
  for (let i = 0; i < s.length; i++) {
  if (s[i] === "I" && s[i + 1] === "V") {
  accumulator += 4;
  i++;
  } else if (s[i] === "I" && s[i + 1] === "X") {
  accumulator += 9;
  i++;
  } else if (s[i] === "X" && s[i + 1] === "L") {
  accumulator += 40;
  i++;
  } else if (s[i] === "X" && s[i + 1] === "C") {
  accumulator += 90;
  i++;
  } else if (s[i] === "C" && s[i + 1] === "D") {
  accumulator += 400;
  i++;
  } else if (s[i] === "C" && s[i + 1] === "M") {
  accumulator += 900;
  i++;
  }else if(s[i]==="X" && s[i+1] ==="M"){
  accumulator ="error"
  i++
  }else if(s[i]==="L" && s[i+1] ==="C"){
  accumulator ="error"
  i++
  }else if(s[i]==="L" && s[i+1] ==="D"){
  accumulator ="error"
  i++
  }else if(s[i]==="D" && s[i+1] ==="M"){
  accumulator ="error"
  i++
  }else if(s[i]==="X" && s[i+1] ==="D"){
  accumulator ="error"
  i++
  }else if(s[i] !== "I" && s[i] !== "V" && s[i] !== "X" && s[i] !== "L" && s[i] !== "C" && s[i] !== "D" && s[i] !== "M"){
  accumulator ="error"
  i++
  }else if(accumulator >= 3000){
  accumulator="error"
  i++
  }
  else {
  accumulator += romanHash[s[i]];
  }
  }
  return accumulator;
  })(val)
  result.innerHTML=finNum;
  }