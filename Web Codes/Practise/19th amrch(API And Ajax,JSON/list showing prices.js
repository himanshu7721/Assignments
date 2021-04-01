const btn = document.getElementById('btn');
const prices = document.getElementById('prices');


const getPrice = () => {
    fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then((res) => {
        console.log(res.ticker.price);

        const li = document.createElement('li');
        li.innerText = res.ticker.price;

        prices.append(li);
    })
    .catch((e) => {
        console.log("Error");
        console.log(e);
    })
}



btn.addEventListener('click', (e) => {
    getPrice()
})