import foo from './utils/foo'

window.addEventListener('load', () => {
	console.log(foo('Thomas'))
	console.log(`Environment: ${process.env.EXAMPLE}`)
});
