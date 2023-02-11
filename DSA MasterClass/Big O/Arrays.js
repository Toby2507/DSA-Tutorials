const myArray = [11, 3, 23, 7];
myArray.push(17); // Time: O(1)
myArray.pop(); // Time: O(1)
myArray.shift(); // Time: O(n)
myArray.unshift(10); // Time: O(n)
myArray.splice(1, 0, 'Hi'); // Time: O(n)
myArray.splice(1, 1); // Time: O(n)
// Search by value Time: O(n)
// Search by index Time: O(1)

console.log(myArray);