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
      <div class="card h-100">
            <img src=${item.image} class="card-img-top h-100 rounded-4" alt=${item.name} >
            <div class="card-body">
                <h2 class="card-title">Features</h2>
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
            <div class="card-footer">
                <div>
                    <h1>${item.name}</h1>
                </div>
                <div>
                    <i class="fa-solid fa-circle-arrow-right"></i>
                </div>
            </div>
       </div>
    `;
    showCard.appendChild(divCard);
  });
};

dataLoad();
