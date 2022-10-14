// ========== Task 1 ==========
`
link: "https://docs.google.com/document/d/1JlCHJ0D_6qbiFoY_EyFMwC2T3C6Itqfh15Wd4O3WLFU/edit?usp=sharing"
`

// ========== Task 2 ==========
function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  switch (nextNumber) {
    case 0:
      break;
    case (nextNumber % 3 == 0):
      console.log("Fizz");
      break;
    case (nextNumber % 5 === 0):
      console.log("Buzz");
      break;
    case (nextNumber % 3 === 0 && nextNumber % 5 === 0):
      console.log("FizzBuzz");
      break;
    default:
      countDown(nextNumber);
      break;
  }
}
countDown(100);