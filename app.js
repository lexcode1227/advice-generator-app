const api = axios.create({
    baseURL: "https://api.adviceslip.com/advice",
    Headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
const API = "https://api.adviceslip.com/advice"
const btn = document.querySelector("#btn")

//Llamado a la api
async function getRandomQuote(){
    //Método 1 usando fetch

    // const res = await fetch(API)
    // const data = await res.json()

    // const quote = data.slip.advice
    // console.log(data)
    // console.log(quote)
    
    //Método 2 usando axios
    const {data} = await api()
    const quote = data.slip.advice
    const id = data.slip.id
    console.log(quote)

    const text = document.querySelector(".quote")
    const adviceNum = document.querySelector("#adviceNum")
    text.textContent = ""
    adviceNum.textContent = ""
    text.textContent =  `"${quote}"` 
    adviceNum.textContent =  id 
}
btn.addEventListener("click", getRandomQuote)