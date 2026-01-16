export class Email {
  validEmail(email: string): boolean {
	const parts = email.split("@"); //We split the email when we found a @
	if(email.charAt(email.length - 1) === "." || email.includes(" ") || parts.length !== 2) return false;
	if (parts.length === 2 && (parts[0].length === 0 || parts[1].length === 0)) return false;
    if (email.includes("@") && email.includes(".")) return true;
	return false;
  }
}
