export class Email {
  validEmail(email: string): boolean {
	if(email.charAt(email.length - 1) === "." ||email.includes(" ")) return false;
    if (email.includes("@") && email.includes(".")) return true;
	return false;
  }
}
