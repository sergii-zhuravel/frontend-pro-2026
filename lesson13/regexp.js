const sentence = "My phone is 555-123-4567";
console.log(sentence.replace(/\d/g, "*"));

// 1. Check if a string contains a word
// const text = "I love JavaScript";

// console.log(/JavaScript/.test(text)); // true
// console.log(/Python/.test(text));     // false

// Concept: literal matching

// 2. Find all numbers in a string
// const text = "Order 123, Item 456, Qty 7";

// console.log(text.match(/\d+/g));

// Output:

// ["123", "456", "7"]

// Concepts:

// \d = digit
// + = one or more
// g = global search
// 3. Validate a simple email
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// console.log(emailRegex.test("john@example.com")); // true
// console.log(emailRegex.test("invalid-email"));    // false

// Concepts:

// ^ start
// $ end
// character classes
// 4. Extract hashtags
// const text = "Learning #JavaScript and #Regex today";

// console.log(text.match(/#\w+/g));

// Output:

// ["#JavaScript", "#Regex"]

// Concepts:

// \w = letters, digits, underscore
// 5. Validate a phone number format
// const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

// console.log(phoneRegex.test("123-456-7890")); // true
// console.log(phoneRegex.test("1234567890"));   // false

// Concepts:

// {n} exact count
// 6. Replace multiple spaces with one space
// const text = "Hello     world    !";

// console.log(text.replace(/\s+/g, " "));

// Output:

// "Hello world !"

// Concepts:

// \s whitespace
// regex for text cleanup
// 7. Extract words starting with capital letters
// const text = "John and Mary visited London";

// console.log(text.match(/\b[A-Z][a-z]*\b/g));

// Output:

// ["John", "Mary", "London"]

// Concepts:

// character ranges
// word boundaries \b
// 8. Password rule demo
// const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

// console.log(passwordRegex.test("Password1")); // true
// console.log(passwordRegex.test("password"));  // false

// Concepts:

// lookaheads
// practical validation
