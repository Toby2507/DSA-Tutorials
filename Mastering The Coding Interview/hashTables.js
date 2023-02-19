// It uses key value pairs
// It employs an hashing function to hash the key to each input is generally assumed to take O(1) Time

// Insert O(1)
// Lookup O(1)
// Delete O(1)
// Search O(1)

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: () => console.log('ahhhhhhhhh!')
};
user.scream();
user.spell = 'abra kadabra';
console.log(user);