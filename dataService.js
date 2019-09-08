const url= "./products.json";
const getProducts = (url) =>{
    let promiseProducts = new Promise((resolve)=>{
        fetch(url).then(function(resp){
            return resp.json();
        })
        .then(function(data){
            let dataProducts = data
            resolve(dataProducts)
        })
    });
    return promiseProducts;
};

getProducts(url).then((result)=>{
    const containerList = document.getElementById('carousel-container');
    const createTemplate = (data) => {
        let listProducts = '';
        data.groups.forEach((data, index) => {
            let isActive = "";
            if (index == 0)
                isActive = "active";

            const cardProducts = `
            <div class="carousel-item ${isActive}">
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-2">
                        <img class="card-img-top" src="${data[0].img}" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">${data[0].name}</h4>
                            <p class="card-text">${data[0].description}</p>
                            <a class="btn btn-primary">Ver</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 clearfix d-none d-md-block">
                    <div class="card mb-2">
                        <img class="card-img-top" src="${data[1].img}"
                        alt="Card image cap">
                        <div class="card-body">
                        <h4 class="card-title">${data[1].name}</h4>
                        <p class="card-text">${data[1].description}</p>
                        <a class="btn btn-primary">Ver</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 clearfix d-none d-md-block">
                    <div class="card mb-2">
                        <img class="card-img-top" src="${data[2].img}"
                        alt="Card image cap">
                        <div class="card-body">
                        <h4 class="card-title">${data[2].name}</h4>
                        <p class="card-text">${data[2].description}</p>
                        <a class="btn btn-primary">Ver</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          `;
            listProducts += cardProducts;
        });
        containerList.innerHTML = listProducts;
    };
    createTemplate(result);
});
