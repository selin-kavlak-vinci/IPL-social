export class Email {
  validEmail(email: string): boolean {
	if(email.charAt(email.length - 1) === ".") return false
	if (email.includes(" ")) return false;
    if (email.includes("@") && email.includes(".")) return true;
	return false;
  }
}
