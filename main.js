function ggeett ()  {
    return new Promise(num => {
      setTimeout(() => {
       +num(String.fromCharCode(Date.now().toString().slice(-5)))
      }, 50)
    })
  }

async function myFunc(length) {
	let start = Date.now(),
    	result = " ",
    	i = 0;
     while(i < length) {
        result += await ggeett();
      i++;
    }
    let	end = Date.now();
    return console.log(result + ' За ' + (end - start) + ' ms') ;
  }

myFunc(4);