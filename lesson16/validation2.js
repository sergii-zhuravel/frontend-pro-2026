document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach(function (form) {
    const validator = new Validator(form);

    validator.init();
  });
});

class Validator {
  constructor(form) {
    this.form = form;

    this.fields = form.querySelectorAll(
      "[data-required], [data-email], [data-minlength]",
    );
  }

  validateForm() {
    let isValid = true;

    for (let i = 0; i < this.fields.length; i++) {
      const validator = new FieldValidator(this.fields[i]);

      const fieldValid = validator.validate();

      if (!fieldValid) {
        isValid = false;
      }
    }

    return isValid;
  }

  getFormData() {
    const data = {};

    const elements = this.form.elements;

    for (let i = 0; i < elements.length; i++) {
      const field = elements[i];

      if (field.name) {
        data[field.name] = field.value;
      }
    }

    return data;
  }

  init() {
    const self = this;

    this.form.addEventListener("submit", function (e) {
      e.preventDefault();

      const valid = self.validateForm();

      if (valid) {
        console.log("FORM DATA");
        console.log(self.getFormData());

        console.log("FORM ATTRIBUTES");

        console.log({
          method: self.form.method,
          action: self.form.action,
        });
      }
    });
  }
}

class FieldValidator {
  constructor(field) {
    this.field = field;
  }

  clearError() {
    this.field.classList.remove("error");
    this.field.classList.remove("success");

    const oldError = this.field.parentNode.querySelector(".error-message");

    if (oldError) {
      oldError.remove();
    }
  }

  showError(message) {
    this.field.classList.add("error");

    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = message;

    this.field.insertAdjacentElement("afterend", error);
  }

  validate() {
    this.clearError();

    const value = this.field.value.trim();

    if (this.field.dataset.required === "true" && value === "") {
      this.showError("Поле обовʼязкове");
      return false;
    }

    if (this.field.dataset.email === "true") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (value && !emailRegex.test(value)) {
        this.showError("Некоректний email");
        return false;
      }
    }

    if (this.field.dataset.minlength) {
      const min = parseInt(this.field.dataset.minlength);

      if (value.length < min) {
        this.showError(`Мінімальна довжина ${min} символів`);
        return false;
      }
    }

    this.field.classList.add("success");

    return true;
  }
}

// function Validator(form) {
//   this.form = form;

//   this.fields = form.querySelectorAll(
//     "[data-required], [data-email], [data-minlength]",
//   );
// }

// Validator.prototype.validateForm = function () {
//   let isValid = true;

//   for (let i = 0; i < this.fields.length; i++) {
//     const validator = new FieldValidator(this.fields[i]);

//     const fieldValid = validator.validate();

//     if (!fieldValid) {
//       isValid = false;
//     }
//   }

//   return isValid;
// };

// Validator.prototype.getFormData = function () {
//   const data = {};

//   const elements = this.form.elements;

//   for (let i = 0; i < elements.length; i++) {
//     const field = elements[i];

//     if (field.name) {
//       data[field.name] = field.value;
//     }
//   }

//   return data;
// };

// Validator.prototype.init = function () {
//   const self = this;

//   this.form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const valid = self.validateForm();

//     if (valid) {
//       console.log("FORM DATA");
//       console.log(self.getFormData());

//       console.log("FORM ATTRIBUTES");

//       console.log({
//         method: self.form.method,
//         action: self.form.action,
//       });
//     }
//   });
// };

// function FieldValidator(field) {
//   this.field = field;
// }

// FieldValidator.prototype.clearError = function () {
//   this.field.classList.remove("error");
//   this.field.classList.remove("success");

//   const oldError = this.field.parentNode.querySelector(".error-message");

//   if (oldError) {
//     oldError.remove();
//   }
// };

// FieldValidator.prototype.showError = function (message) {
//   this.field.classList.add("error");

//   const error = document.createElement("div");
//   error.className = "error-message";
//   error.textContent = message;

//   this.field.insertAdjacentElement("afterend", error);
// };

// FieldValidator.prototype.validate = function () {
//   this.clearError();

//   const value = this.field.value.trim();

//   if (this.field.dataset.required === "true" && value === "") {
//     this.showError("Поле обовʼязкове");
//     return false;
//   }

//   if (this.field.dataset.email === "true") {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (value && !emailRegex.test(value)) {
//       this.showError("Некоректний email");
//       return false;
//     }
//   }

//   if (this.field.dataset.minlength) {
//     const min = parseInt(this.field.dataset.minlength);

//     if (value.length < min) {
//       this.showError(`Мінімальна довжина ${min} символів`);
//       return false;
//     }
//   }

//   this.field.classList.add("success");

//   return true;
// };
