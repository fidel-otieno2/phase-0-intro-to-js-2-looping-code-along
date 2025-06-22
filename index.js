function writeCards(names, event) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");
[
  "Thank you, Charlie, for the wonderful birthday gift!",
  "Thank you, Samip, for the wonderful birthday gift!",
  "Thank you, Ali, for the wonderful birthday gift!"
]
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
countDown(10);
