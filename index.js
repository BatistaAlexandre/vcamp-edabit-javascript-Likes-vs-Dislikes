function likeOrDislike(arr) {
  // declarada a função: likeOrDislike
  let result = "Nothing";

  // utilizei .map para poder percorrer o array e pegar cada item passado
  arr.map((item) => {
    if (item === "Like") {
      // o ternario facilita uma condição sem a necessidade de utilizar um if/else, deixando o código mais limpo
      result === "Like" ? (result = "Nothing") : (result = "Like");
    } else {
      result === "Dislike" ? (result = "Nothing") : (result = "Dislike");
    }
  });

  return result;
}
