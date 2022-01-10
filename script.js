search_btn.addEventListener("click",getImg);
function getImg(){
fetch('https://www.themealdb.com/api/json/v1/1/search.php').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata);
    let data1="";
    completedata.map((values)=>{
        data1+='<div class="card"> <h4 class="title">${values.strMeal}</h4> <img src=${values.strMealThumb} alt="img" class="images"> </div>'
    });
    document.getElementById("cards").innerHTML=data1;
    
}).catch((err)=>{
    console.log(err);
})
}