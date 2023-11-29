export const replaceHtml = (html) => {
  let result = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return result
}