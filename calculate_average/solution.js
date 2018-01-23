function find_average(array) {
    let arrSum = 0;
    for (let i = 0; i < array.length; i++){
      arrSum += array[i]
    }
    return arrSum/array.length;
  }