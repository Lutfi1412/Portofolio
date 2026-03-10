'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// cek dulu apakah ada
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}




// custom select variables


if (document.querySelector("[data-page='project']")) {
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    select.addEventListener("click", function () { elementToggleFunc(this); });

    // add event in all select items
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

      });
    }

    // filter variables
    const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = function (selectedValue) {

      for (let i = 0; i < filterItems.length; i++) {

        if (selectedValue === "Top Projects") {
          filterItems[i].classList.add("active");
        } 
        
        // else if (selectedValue === filterItems[i].dataset.category) {
        //   filterItems[i].classList.add("active");
        // } else {
        //   filterItems[i].classList.remove("active");
        // }
      }

    }

    let lastClickedBtn = filterBtn[0];

    for (let i = 0; i < filterBtn.length; i++) {

      filterBtn[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

      });

    }
}

// add event in all filter button items for large screen




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


const contactForm = document.querySelector(".form");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formPayload = new FormData(contactForm);

    fetch(contactForm.action, {
      method: contactForm.method,
      body: formPayload,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
          confirmButtonText: 'OK'
        });
        contactForm.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message.'
        });
      }
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong!'
      });
    });

  });

}





// ===============================
// LOAD PROJECT LIST (index.html)
// ===============================

const projectList = document.querySelector('.project-list');

if (projectList) {
  fetch('project.json')
    .then(res => res.json())
    .then(data => {

      projectList.innerHTML = '';

      data.forEach(project => {

        const li = document.createElement('li');
        li.className = 'project-item active';
        li.setAttribute('data-filter-item', '');
        li.setAttribute('data-category', project.katergori.toLowerCase());

        li.innerHTML = `
          <a href="project.html?id=${project.id}">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src="${project.image}" alt="${project.name}" loading="lazy">
            </figure>

            <h3 class="project-title">${project.name}</h3>
            <p class="project-category">${project.katergori}</p>
          </a>
        `;

        projectList.appendChild(li);
      });
    });
}



// ===============================
// LOAD PROJECT DETAIL (project.html)
// ===============================

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
  fetch('project.json')
    .then(res => res.json())
    .then(data => {

      console.log("DATA:", data);
      console.log("ID URL:", id);

      const project = data.find(p => String(p.id) === String(id));

      if (!project) {
        console.log("Project tidak ditemukan");
        return;
      }

      document.querySelector(".page-title h2").innerHTML =
        `${project.name}`;

      document.querySelector(".page-title .sub").textContent =
        project.subname;

      document.querySelector(".project-img img").src =
        project.image;

      document.querySelector(".project-info p").textContent =
        project.deskripsi;

        document.querySelector(".view-more-wrapper a").href =
        project.url;
    });
}

