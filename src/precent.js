function getPrecent(num = 0 , number = 0) {
  let precent;
  const error = 'Значение не может быть вычесленно';
  if((num === 0 && !isNaN(num)) || (number === 0 && !isNaN(number))){
    return precent = 0
  }else 
  if(num > 0 && number > 0){
    return Math.round((num * 100) / number);
  }else
  if(isNaN(num) || isNaN(number) || !num || num < 0 || !number || number < 0){
    return error;
  }
}
console.log(getPrecent(300))
  
export {getPrecent}  