function ggeett ()  {
    return new Promise(num => {
      setTimeout(() => {
       +num(String.fromCharCode(Date.now().toString().slice(-5)))
      }, 50)
    })
  }

async function myFunc(length) {
    let result= " ";
    let i = 0;
    while(i < length) {
        result += await ggeett();
      i++;
    }
    return console.log(result);
  }

myFunc(4);












