export function taskFirst() {
	  const task = 'I prefer const when I can.'; // Using const instead of var
	  return task;
}

export function getLast() {
	  return ' is okay';
}

export function taskNext() {
	  let combination = 'But sometimes let'; // Using let instead of var
	  combination += getLast();

	  return combination;
}


