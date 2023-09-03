async function showExamples() {
    const rows = document.createElement("div");
    rows.className="my-3 row row-cols-1 row-cols-md-2 row-cols-lg-3";
    rows.id="row-identifier"
    const container = document.getElementById("container");
    container.appendChild(rows);

    const exampleData = await getExamples();
    displayExamples(exampleData);
}

async function getExamples() {
    const path = "examples.json"
    const topicContent = await fetch(path);
    return topicContent.json();
}

async function displayExamples(exampleData){
    exampleData.forEach(res => {
        console.log(res.image);
        const column = document.createElement("div");
        column.className="col mb-3";
        column.innerHTML =
        `
        <div class="card example-card h-100">
            <img 
                src=${res.image}
                alt=${res.alt}
                class="card-img-top img-fluid card_image"
            />
        </div>
        `
        const container = document.getElementById("row-identifier");
        container.appendChild(column);
    });
  }

  window.addEventListener('load', showExamples);