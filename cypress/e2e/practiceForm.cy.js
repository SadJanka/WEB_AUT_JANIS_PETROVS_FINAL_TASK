import PracticeFormPage from "../pages/PracticeFormPage";

describe("DemoQA Practice Form", () => {
  const form = new PracticeFormPage();

  beforeEach(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
    // Remove fixed ads/footer to prevent UI blocking
    cy.get("#fixedban").invoke("remove");
    cy.get("footer").invoke("remove");
  });

  it("fills and submits the form correctly", () => {
    form.fillFirstName("Janis");
    form.fillLastName("Petrovs");
    form.fillEmail("janis.fake@email.com");
    form.selectGender("Male");
    form.fillMobile("2222222222");
    form.setDateOfBirth("28", "February", "1930");
    form.setSubjects(["Economics"]);
    form.selectHobbies(["Music"]);
    form.uploadPicture("download.jpg");
    form.fillAddress("Riga, Latvia");
    form.selectState("NCR");
    form.selectCity("Delhi");
    form.submitForm();

    form.verifySubmission({
      name: "Janis Petrovs",
      email: "janis.fake@email.com",
      gender: "Male",
      mobile: "2222222222",
      dob: "28 February,1930",
      subjects: "Economics",
      hobbies: "Music",
      picture: "download.jpg",
      address: "Riga, Latvia",
      stateCity: "NCR Delhi",
    });
  });
});
