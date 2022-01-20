var buttonEl = document.querySelector("#save-task");
console.log(buttonEl)

var popWindow = function(){
    new_window=window.open('','','width=100,height=100')
    new_window.document.write('message')
    new_window.focus()

    // automatic close the window in 5 secs
    setTimeout(function() {new_window.close();}, 5000)
}

buttonEl.addEventListener("click",function(){
    popWindow();
})