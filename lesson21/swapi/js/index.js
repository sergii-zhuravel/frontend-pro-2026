import { getSwapiData } from "./utils.js";

class Swapi {
  constructor(params) {
    this.params = params;
  }

  init() {
    const form = document.querySelector(this.params.form);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.submitForm(form);
    });
  }

  showLoader() {
    this.params.elLoad.classList.remove("d-none");
  }

  async submitForm(form) {
    this.showLoader();

    const formUrl = new FormData(form).get("url");
    const normalizedUrl = formUrl.trim() || "people/1";
    const response = await getSwapiData(form.action, normalizedUrl);
    this.showResponse(response, normalizedUrl);
  }

  showResponse(response, url) {
    const { elPre, elController, elId, elLoad } = this.params;

    if (response?.status === "success") {
      const getUrlInfo = url.split("/");
      elController.classList.remove("d-none");
      elController.innerHTML = getUrlInfo[0];
      if (getUrlInfo[1]) {
        elId.classList.remove("d-none");
        elId.innerHTML = getUrlInfo[1];
      } else {
        elId.classList.add("d-none");
      }
      elPre.innerHTML = JSON.stringify(response.data, null, 2);
    } else {
      elController.classList.add("d-none");
      elId.classList.add("d-none");
      elPre.innerHTML = response;
    }

    elLoad.classList.add("d-none");
  }
}

// function Swapi(params) {
//   const { form, elPre, elController, elId, elLoad } = params;

//   this.init = function () {
//     const elForm = document.querySelector(form);
//     elForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       this.formSubmit(e);
//     });
//   };

//   this.formSubmit = async function (e) {
//     elLoad.classList.remove("d-none");
//     const formUrl = new FormData(e.target).get("url");
//     const normalizeUrl = formUrl.trimEnd().trimStart() || "people/1";
//     const response = await getSwapiData(e.target.action, normalizeUrl);
//     this.showResponse(response, normalizeUrl);
//   };

//   this.showResponse = async function (response, normalizeUrl) {
//     if (response?.status === "success") {
//       const getUrlInfo = normalizeUrl.split("/");
//       elController.classList.remove("d-none");
//       elController.innerHTML = getUrlInfo[0];
//       if (getUrlInfo[1]) {
//         elId.classList.remove("d-none");
//         elId.innerHTML = getUrlInfo[1];
//       } else {
//         elId.classList.add("d-none");
//       }
//       elPre.innerHTML = JSON.stringify(response.data, null, 2);
//     } else {
//       elController.classList.add("d-none");
//       elId.classList.add("d-none");
//       elPre.innerHTML = response;
//     }
//     elLoad.classList.add("d-none");
//   };
// }

const swapi = new Swapi({
  form: ".js--swapi_form",
  elPre: document.querySelector(".js--swapi_pre"),
  elController: document.querySelector(".js--swapi_controller"),
  elId: document.querySelector(".js--swapi_id"),
  elLoad: document.querySelector(".js--swapi_load"),
});

document.addEventListener("DOMContentLoaded", () => {
  swapi.init();
});
