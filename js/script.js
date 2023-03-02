// data load
const dataLoad = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => dataShow(data.data.tools));
};

// data show
const showCard = document.getElementById("showCard");

const dataShow = (data) => {
  data.map((item) => {
    const divCard = document.createElement("div");
    divCard.innerHTML = `
      <div class="card h-100 p-2 border-2 border-light-subtle">
            <img src=${item.image} class="card-img-top h-100 rounded-4" alt=${item.name} >
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
                    3.${item.features[2]}
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
                  <button type="button" class="btn btn-light">
                      <i class="fa-solid fa-circle-arrow-right fs-2"></i>
                  </button>
                </div>
            </div>
       </div>
    `;
    showCard.appendChild(divCard);
  });
};

dataLoad();
