export const validateFormData = (email, password, isSigninForm, name) => {
	const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
	const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/.test(password);

	if (!isSigninForm) {
		if (!name) return "Name cannot be empty";
	}
	if (!isEmailValid) return "Email is not valid";
	if (!isPasswordValid)
		return "Password is not valid( include more than 6 letters, uppercase, number, symbol )";

	return null;
};
