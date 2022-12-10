
const baseApiURL = "http://192.168.15.47:8080/api/"

export async function clientGetGames(){
    const response = await fetch(`${baseApiURL}games`)
    const json = await response.json()
    return json;
}

export function clientSendingVotes(id:number){
const requestOption ={
    method: 'PATCH'
}

    fetch(`${baseApiURL}games/${id}/vote`, requestOption)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export async function clientGetWinner(){
    const response = await fetch(`${baseApiURL}games`)
    const json = await response.json()
    return json[0];
}