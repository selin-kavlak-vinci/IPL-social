import { Email } from "./email";

describe("Vérification d'adresse d'email", () => {
  let email = new Email();
  describe("Test of @", () => {
    it("should return true when given a@.be", () => {
      //Act
      let actual = email.validEmail("a@.be"); //On le modifie pour qu'il passe les nouveaux tests (encore)
      //Assert
      expect(actual).toBe(true);
    });
    it("should return true when given selin@gmail.com", () => {
      let actual = email.validEmail("selin@gmail.com");

      expect(actual).toBe(true);
    });
    it("should return false when given selin.com", () => {
      let actual = email.validEmail("selin.com");

      expect(actual).toBe(false);
    });
  });
  describe("Test of .", () => {
    it("should return true when given a@b.com", () => {
      let actual = email.validEmail("a@b.com");

      expect(actual).toBe(true);
    });
    it("should return false when given a@b.", () => {
      let actual = email.validEmail("a@b.");

      expect(actual).toBe(false);
    });
  });
  describe("Testing if there is no spaces", () => {
    it("should return false when given selin@gm ail.com", () => {
      let actual = email.validEmail("selin@gm ail.com");

      expect(actual).toBe(false);
    });
  });
  describe("It has to be text before and after the @", () => {
    it("should return false when given @gmail.com", () => {
      let actual = email.validEmail("@gmail.com");

      expect(actual).toBe(false);
    });
    it("should return false when given selin@", () => {
      let actual = email.validEmail("selin@");

      expect(actual).toBe(false);
    });
  });
});
