import ErrorManager from "./ErrorManager";
class Api{
    static defaultPlug = "bfc988f7c703c0d698hjlc";
    static Switch = (bool,deviceId="0",callback=()=>{console.log("ok");})=>{
        console.log(deviceId+ "  FBFBIKFJJK");
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        //bfc988f7c703c0d698hjlc
    var urlencoded = new URLSearchParams();
    urlencoded.append("developerId", "-Nlm3ZA2Xaf1K4W8rMGy");
    urlencoded.append("email", "anjaharen@gmail.com");
    urlencoded.append("deviceId", deviceId);
    urlencoded.append("switch_status", bool?"ON":"OFF");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    fetch("https://us-central1-boulou-functions-for-devs.cloudfunctions.net/boulou_switch_device", requestOptions)
    .then(response => response.json())
    .then(result =>{
        console.log(result.success);
        if(result.success){
            localStorage.setItem("switch",JSON.stringify({value:bool}))
            console.log(result)
            callback(bool)
        }
        else{
            ErrorManager.setError(["Prise non connecté ou inexistant",true]);
            //ErrorManager.setErrVis(true);
            console.log(result);
        }
        
    })
     
    .catch(error => console.log('error', error));
    }

    static GetInfo = (callback,deviceId="0")=>{
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch("https://us-central1-boulou-functions-for-devs.cloudfunctions.net/boulou_check_deviceStatus?developerId=-Nlm3ZA2Xaf1K4W8rMGy&deviceId="+deviceId+"&email=anjaharen@gmail.com", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.success){
                callback(result);
                localStorage.setItem("plug-info",JSON.stringify(result))    
                localStorage.setItem("switch",JSON.stringify({value:result.result.status.switch}))
                }
                else{
                console.log("ERROR");
                ErrorManager.setError(["Prise non connecté ou inexistant",true]); 
                }
            })
            .catch(error => console.log('error', error));
    }
}
export default Api