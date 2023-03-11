
const showAlert = () => {
    alert("show alert ok?");
}

const showConfirm = () => {
    const okorNot = confirm("tell me somthig ok or not");
    // console.log(okorNot);
    if (okorNot) {
        alert('all is well')
    }
};

const promtDetail = () =>{
    const usePromt = prompt('please enter your name');
    // console.log(usePromt);
    if (usePromt) {
        console.log(usePromt,'tanq very much');
    }
    else{
        alert('please enter your name')
    }
};