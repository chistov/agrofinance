export function changeMenuItem(curr: number, cb: Function)  {
  console.log('cb: ', curr);
  cb(curr);
  window.scrollTo({top: 0});
}
