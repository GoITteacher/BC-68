function messageTemplate({ name, message }) {
  return `<li>
    <p>${name}: ${message}</p>
  </li>`;
}

export function messagesTemplate(arr) {
  return arr.map(messageTemplate).join('');
}
