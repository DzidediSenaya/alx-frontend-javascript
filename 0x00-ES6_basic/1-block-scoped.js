export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // You don't need to declare innerTask and innerTask2 here
    // if you're not using them outside this block
    // const innerTask = true;
    // const innerTask2 = false;
  }

  return [task, task2];
}
