import { Email } from "./email";

describe("Vérification d'adresse d'email", () => {
  describe("Test du @", () => {
    it("should return true when given @", () => {
      //Arrange
      let email = new Email();
      //Act
      let actual = email.validEmail("@");
      //Assert
      expect(actual).toBe(true);
    });
  });
});
