$(document).ready(function(){

    for(let i=0;i<18;i++)
    {
        if(i<6){
            $("#one").append(`<img class="col-lg-2 col-md-4 col-6 p-1" src="img/pic${i}.jpg">`);
        }
        else if(i<12 && i >= 6){
            $("#two").append(`<img class="col-lg-2 col-md-4 col-6 p-1" src="img/pic${i}.jpg">`);
        }
        else if(i<18 && i>=12){
            $("#three").append(`<img class="col-lg-2 col-md-4 col-6 p-1" src="img/pic${i}.jpg">`);
        }
    }

});