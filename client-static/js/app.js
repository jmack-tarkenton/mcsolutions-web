// $(function () {
//     $("#nav-placeholder").load("./templates/nav.html");
// });

var employees = [
  {
    firstName: "Terry",
    lastName: "McCormick",
    postion: "Founder & CEO",
    image: "terry.jpg",
  },
  {
    firstName: "Kelly",
    lastName: "McCormick",
    postion: "COO",
    image: "kelly.jpg",
  },
  {
    firstName: "Josh",
    lastName: "McCormick",
    postion: "EVP",
    image: "josh.jpg",
  },
  {
    firstName: "Amber",
    lastName: "Gilbert",
    postion: "Project Manager",
    image: "amber.jpg",
  },
  {
    firstName: "Josh",
    lastName: "Vaughan",
    postion: "Lead Field Appraiser",
    image: "josh_v.jpg",
  },
  {
    firstName: "Adam",
    lastName: "Vaughan",
    postion: "Field Appraiser",
    image: "adam.jpg",
  },
  {
    firstName: "Jim",
    lastName: "Vaughan",
    postion: "Field Appraiser",
    image: "jim.jpg",
  },
];

// employees.forEach((employee) => {
//   $("#employees").append(`
//     <div class="col mb-5 mb-5 mb-xl-0">
//                             <div class="text-center">
//                                 <img class="img-fluid rounded-circle mb-4 px-4" src="./assets/staff/${employee.image}" alt="${employee.firstName}" style="height:150px !important; width:auto !important" />
//                                 <h5 class="fw-bolder">${employee.firstName} ${employee.lastName}</h5>
//                                 <div class="fst-italic text-muted">${employee.postion}</div>
//                             </div>
//                         </div>
//     `);
// });

employees.forEach((employee) => {
  $("#employees").append(`
  <div class="col">
  <div class="card text-white bg-dark mb-3 h-100" style="width: 18rem;">
  <img src="./assets/staff/${employee.image}" alt="${employee.firstName}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
    <p class="card-text">${employee.postion}</p>
  </div>
</div>
</div>
    `);
});

const nav = `
<div class="container px-5">
    <a class="navbar-brand" href="index.html">
        <img src="./assets/logo.png" alt="" width="auto" height="50" class="d-inline-block align-text-top">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="covid.html">Covid-19 GA</a></li>
        </ul>
    </div>
</div>`;

const footer = `<div class="container px-5">
<div class="row align-items-center flex-column">
    <div class="col-auto text-center">
        <div class="small m-0 text-white">Copyright &copy; McCormick Solutions 2021</div>
        <img class="text-center" height="50rem" width="auto" src="./assets/logo.png"/>
    </div>
</div>
</div>
`;

$(function () {
  $("#nav").append(nav);
});
