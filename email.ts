export class Email {
  validEmail(email: string): boolean {
	const parts = email.split("@");
	if(email.charAt(email.length - 1) === "." || email.includes(" ") || parts.length !== 2) return false;
	if (parts[0].length === 0 || parts[1].length === 0) return false;
    if (email.includes("@") && email.includes(".")) return true;
	return false;
  }
}
