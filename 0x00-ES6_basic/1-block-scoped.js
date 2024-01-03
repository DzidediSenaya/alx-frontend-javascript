export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // Use let for block-scoping
    const task2 = false; // Use const for block-scoping
  }

  return [task, task2];
}

