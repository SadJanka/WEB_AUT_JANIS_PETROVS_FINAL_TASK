class PracticeFormPage {
  fillFirstName(firstName) {
    cy.get("#firstName").type(firstName);
  }

  fillLastName(lastName) {
    cy.get("#lastName").type(lastName);
  }

  fillEmail(email) {
    cy.get("#userEmail").type(email);
  }

  selectGender(gender) {
    cy.get(`input[name="gender"][value="${gender}"]`).check({ force: true });
  }

  fillMobile(mobile) {
    cy.get("#userNumber").type(mobile);
  }

  setDateOfBirth(day, month, year) {
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select(month);
    cy.get(".react-datepicker__year-select").select(year);
    // Format day as needed (leading zeros)
    const dayFormatted = day.padStart(2, "0");
    cy.get(`.react-datepicker__day--0${dayFormatted}:not(.react-datepicker__day--outside-month)`).click();
  }

  setSubjects(subjects) {
    subjects.forEach((subject) => {
      cy.get("#subjectsInput").type(subject + "{enter}");
    });
  }

  selectHobbies(hobbies) {
    hobbies.forEach((hobby) => {
      cy.contains("label", hobby).click();
    });
  }

  uploadPicture(filename) {
    cy.get("#uploadPicture").selectFile(`cypress/files/${filename}`, { force: true });
  }

  fillAddress(address) {
    cy.get("#currentAddress").type(address);
  }

  selectState(state) {
    cy.get("#state").click().find(".css-26l3qy-menu").contains(state).click();
  }

  selectCity(city) {
    cy.get("#city").click().find(".css-26l3qy-menu").contains(city).click();
  }

  submitForm() {
    cy.get("#submit").click({ force: true });
  }

  verifySubmission(data) {
    cy.get(".modal-content").should("be.visible");
    cy.get("td").contains("Student Name").siblings().should("contain", data.name);
    cy.get("td").contains("Student Email").siblings().should("contain", data.email);
    cy.get("td").contains("Gender").siblings().should("contain", data.gender);
    cy.get("td").contains("Mobile").siblings().should("contain", data.mobile);
    cy.get("td").contains("Date of Birth").siblings().should("contain", data.dob);
    cy.get("td").contains("Subjects").siblings().should("contain", data.subjects);
    cy.get("td").contains("Hobbies").siblings().should("contain", data.hobbies);
    cy.get("td").contains("Picture").siblings().should("contain", data.picture);
    cy.get("td").contains("Address").siblings().should("contain", data.address);
    cy.get("td").contains("State and City").siblings().should("contain", data.stateCity);
  }
}

export default PracticeFormPage;
