function likeOrDislike(arr) {
    let result  = 'Nothing';
  
      for (let i = 0; i < arr.length; i += 1) {
          if (arr[i] === 'Like'){
              if (result === 'Like') {
                  result = 'Nothing';
              } 
						else {result = 'Like';}
          }
              
          if (arr[i] === 'Dislike') {
              if (result === 'Dislike') {
                result = 'Nothing';
              } 
						else {result = 'Dislike'; }
          }
      }
      return result;
  }
  