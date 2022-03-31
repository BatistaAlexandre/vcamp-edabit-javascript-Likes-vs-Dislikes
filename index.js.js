function likeOrDislike(arr) { // declarada a função: likeOrDislike
    let result  = 'Nothing';
                
      for (let i = 0; i < arr.length; i += 1) {  
      // o iten [i] que o usuario procura seriam os botões de Like e Dislike

          if (arr[i] === 'Like'){ // se o usuario estiver procurando o [i]=Like então resultará em [Like]

              if (result === 'Like') {  //se o usuario desmarcar ou clicar 2x o botão de Like então resultará em [Nothing]                 
                  result = 'Nothing';
              } 
					else {result = 'Like';} // caso o usuario não clique novamente no botão Like, então resultará em [Like]
          }
              
          if (arr[i] === 'Dislike'){ // se o usuario estiver procurando o [i] Dislike então resultará em [Dislike]

              if (result === 'Dislike'){ //se o usuario desmarcar ou clicar 2x o botão de Dislike então resultará em [Nothing]
                result = 'Nothing';
              } 
						else {result = 'Dislike'; } // Caso o usuario não clique novamente no botão Dislike, então resultará em [Dislike]
          }
      }
      return result;
  }
  
