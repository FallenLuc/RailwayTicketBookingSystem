export function validationEmail(value: string) {
	return /[a-z.-]+@[a-z-]\.[a-z]/.test(value)
}
