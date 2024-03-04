export function taskFirst() {
<<<<<<< HEAD
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let  combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
=======
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


>>>>>>> 5cd068382e3109f97bcb353258000c3123f7625f
