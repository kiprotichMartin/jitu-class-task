// ========== Task 1 ==========
`
link: "https://docs.google.com/document/d/1JlCHJ0D_6qbiFoY_EyFMwC2T3C6Itqfh15Wd4O3WLFU/edit?usp=sharing"
`;

// ========== Task 2 ==========
function countDown(fromNumber) {
  if (fromNumber > 0) {
    if (fromNumber % 3 === 0 && fromNumber % 5 === 0) {
      console.log("FizzBuzz");
    } else if (fromNumber % 3 === 0) {
      console.log("Fizz");
    } else if (fromNumber % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(fromNumber);
    }

    countDown(fromNumber - 1);
  }
}

countDown(100);
