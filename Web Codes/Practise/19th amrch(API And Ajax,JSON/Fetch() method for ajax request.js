fetch("https://api.cryptonator.com/api/ticker/btc-usd")
.then((res)=>
{
return res.json();})
.then((res)=>{
console.log(res.ticker.price);
})
.catch((e)=>
{
console.log("ERROR");
console.log(e);})