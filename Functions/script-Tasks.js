//Print odd numbers :
//Anonymous
let printOddNumber = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]);
      }
    }
  };
  printOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  //IIFE 
  (function printOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]);
      }
    }
  })([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]);

  //Arrow 
  let printOddinArrow = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]);
      }
    }
  };
  
  printOddinArrow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 


  // Convert all the strings to title caps in a string array:
  // IIFE 
  let stringArray = ["harish", "student", "web developer"];

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ').join(' ').toUpperCase();
    }
})(stringArray);

console.log(stringArray); 

// Anonymous 
let string_Array = ["harish", "student", "web developer"];
let title_case = function(arr){
for (let i=0 ; i<arr.length; i++) {
    arr[i] = arr[i].split(' ').join(' ').toUpperCase();
}
}
titlecase(stringArray);
console.log(stringArray);

// Arrow 
let string_arr = ["harish", "student", "web developer"];

let titlecase = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ').toUpperCase().join(' ');
    }
};

titlecase(string_arr);
console.log(string_arr);


// Sum of all numbers in an array:
// Anonymous 
let num = [1, 2, 3, 4, 5];
let addedsum = function(arr){
let total = 0;
for (let i=0; i<arr.length; i++){
    total += arr[i];
}
return total;
};
    console.log(addedsum(num));

// Arrow 
let numbers = [1, 2, 3, 4, 5];
let sum = (arr) => {
    let total = 0;
for (let i=0; i<arr.length; i++){
    total += arr[i];
}
return total;
};
    console.log(sum(numbers));

// IIFE 
let number = [1, 2, 3, 4, 5];
let sum_added = (function(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total;
})(number);
console.log(sum_added);

// Return all the prime numbers in an array 
// IIFE
let allnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function(arr) {
    let primes = [];
    for (let num of arr) {
        if (num >= 2) {
            let isPrime = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes[primes.length] = num;
            }
        }
    }
    return primes;
})(allnumbers);

console.log("Prime numbers:", primeNumbers);


// Anonymous 
let all_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let prime_Numbers = function(arr) {
    let primes = [];
    for (let num of arr) {
        if (num >= 2) {
            let isPrime = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes[primes.length] = num;
            }
        }
    }
    return primes;
};

console.log("Prime numbers:", prime_Numbers(all_numbers));


// Arrow 
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers1 = (arr) => {
    let primes = [];
    for (let num of arr) {
        if (num >= 2) {
            let isPrime = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes[primes.length] = num;
            }
        }
    }
    return primes;
};

console.log("Prime numbers:", primeNumbers1(Numbers));

// Return all palindromes in an array 
// IIFE 
let array1 = ["harish", "student", "guvi", "fsd", "pal"];

let palindromes = (function(arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
})(array1);

console.log("Palindromes:", palindromes);

// Anonymous 
let array2 = ["harish", "student", "guvi", "fsd", "pal"];

let allpalindromes = (function(arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
})(array2);

console.log("Palindromes:", allpalindromes); 

//Arrow 
let array3 = ["harish", "student", "guvi", "fsd", "pal"];

let find_Palindromes = function(arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
};

console.log("Palindromes:", find_Palindromes(array3)); 

// Remove duplicates from an array 
//IIFE 
let array = [1, 2, 3, 4, 5, 3, 5, 6, 9, 8, 1];

let uniqueArray = (function(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
})(array);

console.log("Array with duplicates removed:", uniqueArray);

//Anonymous 
let array_1 = [1, 2, 3, 4, 5, 3, 5, 6, 7, 9, 1];

let removeDuplicates = function(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
};

console.log("Array with duplicates removed:", removeDuplicates(array_1));

//Arrow 
let array_2 = [1, 2, 3, 4, 5, 3, 5, 6, 7, 9, 1];

let remove_Duplicates = (arr) => arr.filter((value, index) => arr.indexOf(value) === index);

console.log("Array with duplicates removed:", remove_Duplicates(array_2));







