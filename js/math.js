/*Example slide*/
module.exports = {
  constantes: {
    PI: 3.14159
  },
  soma: function(a, b) { return a + b; },
  subt: function(a, b) { return a - b; },
  multi: function(a, b) { return a * b; },
  div: function(a, b) {
    if(b>0)
      return a / b;
    else {
      console.log("Impossible!")
    }
  }
};
