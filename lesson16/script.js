function FormValidator(form) {
  this.sended = false;
  this.success = false;

  this.elements = form.elements;

  this.FORM_FIELD = ".form-group";
  this.ERROR_ITEM_CLASS_NAME = "error_item";
  this.PARENT_ELEMENT_ERROR = "error";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    this.sendForm();
  });
}

FormValidator.prototype.sendForm = function () {
  this.sended = true;
  const hasErrors = this.validateFields();

  if (hasErrors) {
    return;
  }

  this.success = true;

  const data = {
    action: form.action,
    method: form.method,
    formData: new FormData(form),
  };

  for (let value of data.formData) {
    console.log(value);
  }

  console.log(data);
};

FormValidator.prototype.validateFields = function () {
  let hasErrors = false;

  for (let i = 0; i < this.elements.length; i++) {
    const element = this.elements[i];
    const reqMessage = element.dataset.req;
    const emailMessage = element.dataset.email;
    const minMessage = element.dataset.min_message;
    this.clearError(element);

    if (reqMessage) {
      hasErrors = this.validateRequireField(element, reqMessage);
    }

    if (emailMessage) {
      hasErrors = this.validateEmail(element, emailMessage);
    }

    if (minMessage) {
      hasErrors = this.validateMinLength(element, minMessage);
    }
  }

  return hasErrors;
};

FormValidator.prototype.validateRequireField = function (element, message) {
  if (!element.value.length) {
    this.createError(element, message);

    return true;
  }
};

FormValidator.prototype.validateEmail = function (element, message) {
  const elementValue = element.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(elementValue)) {
    this.createError(element, message);

    return true;
  }
};

FormValidator.prototype.validateMinLength = function (element, message) {
  const minLength = element.dataset.min_length;
  const minLengthMessage = message.replace("{{N}}", minLength);
  if (element.value.length < minLength) {
    this.createError(element, minLengthMessage);

    return true;
  }
};

FormValidator.prototype.createError = function (element, message) {
  const parent = element.closest(this.FORM_FIELD);
  if (!parent.classList.contains(this.PARENT_ELEMENT_ERROR)) {
    const smallElement = document.createElement("small");
    smallElement.classList.add(this.ERROR_ITEM_CLASS_NAME);
    smallElement.textContent = message;
    parent.append(smallElement);
    parent.classList.add(this.PARENT_ELEMENT_ERROR);
  }
};

FormValidator.prototype.clearError = function (element) {
  const parent = element.closest(this.FORM_FIELD);

  if (parent && parent.classList.contains(this.PARENT_ELEMENT_ERROR)) {
    parent.classList.remove(this.PARENT_ELEMENT_ERROR);
    parent.querySelector(`.${this.ERROR_ITEM_CLASS_NAME}`).remove();
  }
};

const formValidator = new FormValidator(
  document.querySelector(".js--reg_form"),
);

// function FormValidate(form) {
//     this.sended = false;
//     this.success = false;
//     this.elements = form.elements;
//     this.FORM_FIELD = '.form-group';
//     this.ERROR_ITEM_CLASS_NAME = 'error_item';
//     this.PARENT_ELEMENT_ERROR = 'error';

//     form.addEventListener('submit', event => {
//         event.preventDefault();

//         this.sendForm();
//     })

//     this.sendForm = function() {
//         this.sended = true;
//         const hasErrors = this.validateFields();

//         if(hasErrors) {
//            return;
//         }

//         this.success = true;

//         const data = {
//             action: form.action,
//             method: form.method,
//             formData: new FormData(form),
//         }

//         for (let value of data.formData) {
//             console.log(value);
//         }

//         console.log(data);
//     }

//     this.validateFields = function () {
//         let containtError = false;
//         for (let i = 0; i < this.elements.length; i++) {
//             const element = this.elements[i];
//             const reqMessage = element.dataset.req;
//             const emailMessage = element.dataset.email;
//             const minMessage = element.dataset.min_message;
//             this.clearError(element);

//             if (reqMessage) {
//                 containtError = this.validateRequireField(element, reqMessage);
//             }

//             if (emailMessage) {
//                 containtError = this.validateEmail(element, emailMessage);
//             }

//             if (minMessage) {
//                 containtError = this.validateMinLength(element, minMessage);
//             }
//         }

//         return containtError;
//     }

//     this.validateRequireField = function (element, message) {
//         if(!element.value.length) {
//             this.createError(element, message);

//             return true;
//         }
//     }

//     this.validateEmail = function (element, message) {
//         const elementValue = element.value;
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if(!emailRegex.test(elementValue)) {
//             this.createError(element, message);

//             return true;
//         }
//     }

//     this.validateMinLength = function (element, message) {
//         const minLength = element.dataset.min_length;
//         const minLengthMessage = message.replace('{{N}}', minLength);
//         if(element.value.length < minLength) {
//             this.createError(element, minLengthMessage);

//             return true;
//         }
//     }

//     this.createError = function (element, message) {
//         const parent = element.closest(this.FORM_FIELD);
//         if(!parent.classList.contains(this.PARENT_ELEMENT_ERROR)) {
//             const smallElement = document.createElement('small');
//             smallElement.classList.add(this.ERROR_ITEM_CLASS_NAME);
//             smallElement.textContent = message;
//             parent.append(smallElement);
//             parent.classList.add(this.PARENT_ELEMENT_ERROR)
//         }
//     }

//     this.clearError = function (element) {
//         const parent = element.closest(this.FORM_FIELD);

//         if(parent && parent.classList.contains(this.PARENT_ELEMENT_ERROR)) {
//             parent.classList.remove(this.PARENT_ELEMENT_ERROR);
//             parent.querySelector(`.${this.ERROR_ITEM_CLASS_NAME}`).remove()
//         }
//     }
// }

// const formWithValidation = new FormValidate(document.querySelector('.js--reg_form'));

// document.querySelector('.js--check').addEventListener('click', () => {
//     console.log({
//         sended: formWithValidation.sended,
//         success: formWithValidation.success,
//     })
// })
