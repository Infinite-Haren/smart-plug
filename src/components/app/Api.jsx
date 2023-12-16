class Api{
    static Switch = (bool)=>{
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("developerId", "-Nlm3ZA2Xaf1K4W8rMGy");
    urlencoded.append("email", "anjaharen@gmail.com");
    urlencoded.append("deviceId", "bfc988f7c703c0d698hjlc");
    urlencoded.append("switch_status", bool?"ON":"OFF");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    fetch("https://us-central1-boulou-functions-for-devs.cloudfunctions.net/boulou_switch_device", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }
    
}
export default Api