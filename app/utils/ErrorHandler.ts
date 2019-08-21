export default (error) => {
  const message = error.message;
  const pureText = message.split(':')[1];
  return pureText
}