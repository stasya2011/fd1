var head = $("h3");
console.log(head);



/*обработчик событий обычно*/
var liEls = document.querySelectorAll('li');

for(var i = 0; i<liEls.length; i++){
    liEls[i].addEventListener('click', function(){
        console.log("ok")
    })
}

/*обработчик событий через jquery*/

// $('li').on("click", function(){
//     console.log("обработчик событий jquery")
// })