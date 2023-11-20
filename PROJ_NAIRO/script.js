const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/5136/current?token=06abffe5c68ac687b65437cd2a421fc3", requestOptions)
    .then(response => response.json())
    .then(temp_json => (console.log(temp_json),
    render_page(temp_json),
    render_infos(temp_json)
    ))
    .catch(error => console.log('error', error));   


function render_page(info_json=[]){
    const img = document.getElementById("img");
    const cidade= document.querySelector("h2");
    const graus = document.querySelector("#temp");
    const info1 = document.querySelector("#cond");
    const info2 = document.querySelector("#sens");
    console.log(info_json.data)  
    if(info_json){
        cidade.innerHTML= info_json.name;
        img.src = 'https://www.climatempo.com.br/dist/images/v2/svg/'+info_json.data.icon+'.svg';
        graus.innerHTML = info_json.data.temperature+"°";
        info1.innerHTML = info_json.data.condition;
        info2.innerHTML = "Sensação - "+info_json.data.sensation+"º ";
    }
}

function render_infos(info_json=[]){
    const d_vento = document.querySelector("#info_vento")
    const d_umidade = document.querySelector("#info_umidade")
    const d_pressao = document.querySelector("#info_pressao")

    d_vento.insertAdjacentHTML("afterbegin",`
    <p>${info_json.data.wind_direction} ${info_json.data.wind_velocity} Km/h</p>
    `)
    d_umidade.insertAdjacentHTML("afterbegin",`
    <img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-arrow-max.svg">
    <p>${info_json.data.humidity} %</p>
    `)
    d_pressao.insertAdjacentHTML("afterbegin",`
    <p>${info_json.data.pressure} hPa</p>
    `)
}

function date_(){
    const fullDate = new Date();
    const viewTime = document.querySelector(".time");
    const hours = String(fullDate.getHours()).padStart(2, "0");
    const minutes = String(fullDate.getMinutes()).padStart(2, "0");
    const seconds = String(fullDate.getSeconds()).padStart(2, "0");
    let fullTime = `${hours}:${minutes}:${seconds}`;
    render_background(fullTime)
    //return fullTime
}

function render_background(time_){
    const body = document.querySelector("body")
    const lua = document.querySelector("lua")
    lua.style
    if(time_ >  "17:26:00"){
        body.style.cssText = `
        background: linear-gradient(-50deg, blue,black) no-repeat;
        `
    }else{
        body.style.cssText = 
        `background: linear-gradient(to right, orange, yellow) no-repeat;`
    }
}

let hora_atual = setInterval(()=>{
    date_()
},1000)





