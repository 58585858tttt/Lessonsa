let url = fetch('https://fakestoreapi.com/products') 
    .then(res => res.json()) 
    .then(data => localStorage.setItem('data', JSON.stringify(data))) 
 
 
 
 
let posts = []; 

 
async function showInfo() { 
    let data = localStorage.getItem('data'); 
    data = JSON.parse(data); 
    posts = data.map(eachPost => { 
       
        const contain = $('.contain').clone()[0]; 
        // let rating = $(contain).children()[0]; 
        // let span = $('.span').children('#rating'); 
        const title = $(contain).children('.title')[0]; 
        const description = $(contain).children('.description')[0]; 
        let price = $(contain).children('.price')[0]; 
        let titleText = eachPost.title; 
        let descriptionText = eachPost.description; 
        let priceText = eachPost.price; 
        $(title).text(titleText); 
        $(description).text(descriptionText); 
        $(price).text(priceText); 
        $('body').append(contain) 
        return { contain, titleText, descriptionText, priceText} 
    }) 


}

showInfo()

$('.rating').on('click', function (e) {
    let action = 'add';
    for (const span of this.children){
        span.classList[action]("active");
        if (span === e.target) action = 'remove';
    }
});

