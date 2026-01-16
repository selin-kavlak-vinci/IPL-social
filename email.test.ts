import { Email } from "./email";

describe("Vérification d'adresse d'email", () => {
  let email = new Email();
  describe("Test du @", () => {
    it("should return true when given @.be", () => {
      //Act
      let actual = email.validEmail("@.be"); //On le modifie pour qu'il passe les nouveaux tests
      //Assert
      expect(actual).toBe(true);
    });
    it("should return true when given selin@gmail.com", () => {
      let actual = email.validEmail("selin@gmail.com");

      expect(actual).toBe(true);
    });
  });
  describe("Test du .", () => {
    it("should return true when given a@b.com", () => {
      let actual = email.validEmail("a@b.com");

      expect(actual).toBe(true);
    });
    it("should return false when given a@b.", () => {
      let actual = email.validEmail("a@b.");

      expect(actual).toBe(false);
    });
  });
});
