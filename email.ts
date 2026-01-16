export class Email {
  validEmail(email: string): boolean {
    if (email == "@") return true;
	return false;
  }
}
