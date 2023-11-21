const BASE_URL = `https://api.coinpaprika.com/v1`

export function fetchCoins(){
    return fetch(`${BASE_URL}/coins`).then((Response)=>
        Response.json()
    );
}

export function fetchCoinInfo(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}`).then((Response)=>
    Response.json()
    );
}

export function fetchCoinPrice(coinId:string){
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((Response)=>
        Response.json()
    );
}

