// data load
const dataLoad = (limit) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dataShow(data.data.tools, limit);
    });
};

// data show
const showCard = document.getElementById("showCard");
const showALL = document.getElementById("showALL");

const dataShow = (data, limit) => {
  dataSlice = data.slice(0, limit);
  if (dataSlice.length === 6) {
    showALL.classList.remove("d-none");
  } else {
    dataSlice = data.slice(6, limit);
    showALL.classList.add("d-none");
  }
  dataSlice.map((item) => {
    const divCard = document.createElement("div");
    divCard.innerHTML = `
      <div class="card h-100 p-2 border-2 border-light-subtle">
            <img src=${item.image} class="card-img-top h-100 rounded-4" alt=${
      item.name
    } >
            <div class="card-body pb-0">
                <h3 class="card-title fw-bolder">Features</h3>
                <p class="card-text">
                    <p>
                    1.${item.features[0]}
                    </p>
                    <p>
                    2.${item.features[1]}
                    </p>
                    <p>
                    3.${item.features[2] ? item.features[2] : "Not available"}
                    </p>
                </p>
            </div>
            <div class="text-success">
              <hr>
            </div>
            <div class="d-flex align-items-center justify-content-between px-2">
                <div>
                    <h2>${item.name}</h2>
                    <div class="d-flex align-items-center">
                      <i class="fa-regular fa-calendar-days"></i>
                      <h4 class="ms-2">${item.published_in}</h4>
                    </div>
                </div>
                <div>
                  <button onclick="detailDataLoad('${
                    item.id
                  }')" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#aiDetailsModal">
                      <i class="fa-solid fa-circle-arrow-right fs-2"></i>
                  </button>
                </div>
            </div>
       </div>
    `;
    showCard.appendChild(divCard);
  });
  toggle(false);
};

// loader
const loader = document.getElementById("loader");
const toggle = (isLoading) => {
  if (isLoading) {
    loader.classList.remove("d-none");
  } else {
    loader.classList.add("d-none");
  }
};

toggle(true);
dataLoad(6);

// show more button
const showMoreBtn = document.getElementById("showMoreBtn");

showMoreBtn.addEventListener("click", () => {
  dataLoad(12);
});

// details show

const detailDataLoad = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      detailsShow(data.data);
    });
};

const detailsShow = (data) => {
  const detailsShowDescription = document.getElementById(
    "detailsShowDescription"
  );
  detailsShowDescription.innerHTML = `
  <div>
    <div>
      <h2>${data.description}</h2>
      <div>
        <div>
          <p>${data.pricing[0].price}</p>
          <p>${data.pricing[0].plan}</p>
        </div>
        <div>
          <p>${data.pricing[1].price}</p>
          <p>${data.pricing[1].plan}</p>
        </div>
        <div>
          <p>${data.pricing[2].price}</p>
          <p>${data.pricing[2].plan}</p>
        </div>
      </div>
      <div>
        <h2>Features</h2>
        <ul>
          <li>${data.features[1].feature_name}</li>
          <li>${data.features[2].feature_name}</li>
          <li>${data.features[3].feature_name}</li>
        </ul>
      </div>
      <div>
        <h2>Integrations</h2>
        <ul>
           <li>${data.integrations[0]}</li> 
           <li>${data.integrations[1]}</li> 
           <li>${data.integrations[2]}</li> 
        </ul>
      </div>
    </div>
    <div>
      <h1>${data.accuracy.score * 100}</h1>
      <img src=${data.image_link[0]} />
      <p>${data.input_output_examples[0].input}</p>
      <p>${data.input_output_examples[0].output}</p>
    </div>
  </div>
  `;
};
