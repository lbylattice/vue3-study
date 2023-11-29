import hljs from 'highlight.js';
const highlight = (el) => {
	let blocks = el.querySelectorAll('pre code');
	blocks.forEach((block) => {
		hljs.highlightBlock(block)
	})
}

export default { highlight }
