module.exports = function towelSort (matrix) {
	if(!matrix) return [];
	let result = [];
	for(let i = 0; i < matrix.length; i++) {      
      if(i % 2) {
        matrix[i].reverse();        
      }
      result = result.concat(matrix[i]);
    }
  return result;
}
