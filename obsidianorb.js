// sentence format:
// [first phrase] is [second phrase] to [third phrase].

// first sentence fragment array
const array1 = [
"Today ",
"Tomorrow ",
"This month ",
"Next month ",
"Yesterday ",
];

// second sentence fragment array
const array2 = [
"a good time ",
"a bad time ",
"a fun time ",
"a foolish time",
];

// third sentence fragment array

const array3 = [
"count your blessings",
"rethink your life",
"learn a new skill",
"do the thing",
"get in trouble",
];

function conjure() {
  //generate some ints
  let int1 = Math.floor(Math.random() * array1.length);
  let int2 = Math.floor(Math.random() * array2.length);
  let int3 = Math.floor(Math.random() * array3.length);

  // static output message
  const static_output = "The orb has conjured a message from the cybermists:\n";

  // dynamic output message
  let output = [];
  output.push(array1[int1]);
  output.push("is ");
  output.push(array2[int2]);
  output.push("to ");
  output.push(array3[int3]);
  output.push(".");

  //assemble final output
  return(static_output + output);
}
