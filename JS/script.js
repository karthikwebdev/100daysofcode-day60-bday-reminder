function openHome(){
    document.querySelector('main').innerHTML = `<div class="container">
    <h1 class="display-2 text-lg-center">A Birthday Reminder App</h1>
   <p class="text-lg-center text-monospace lead">-Did you ever regret of forgetting birthday of special ones , I felt it . hence made this app which remembers all your friend's birthdays and reminds you on that day</p>    
</div>`;
}
function addBirthday(){
    let name = document.querySelector('#name').value;
    let date = document.querySelector('#date').value;
    let phone = document.querySelector('#phone').value;
    if(localStorage.getItem("birthdays")===null){
        let item = [{
            'name':name,
            'date':date,
            'phone':phone
        }]
        localStorage.setItem("birthdays",JSON.stringify(item))
    }else{
        let item = {
            'name':name,
            'date':date,
            'phone':phone
        }
        let items = JSON.parse(localStorage.getItem('birthdays'))
        items.push(item)
        localStorage.setItem("birthdays",JSON.stringify(items))
    }
    document.querySelector('#name').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#phone').value = '';
}
function showToday(){

}
function showAllBirthdays(){
    document.querySelector('main').innerHTML = `<div class="container mt-3">
    <div class="row"></div></div>`
    let items = JSON.parse(localStorage.getItem('birthdays'))
    items.forEach((item)=>{
        let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
        let month = months[parseInt(item.date.substring(5,7))-1];
        let date = parseInt(item.date.substring(8,10))
        document.querySelector('.row').innerHTML +=`
        <div class="col col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="card border-success mt-3">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">birthday on ${month}-${date}'</p>
                    <a href="#" class="btn btn-success">wish them</a>
                  </div>
                </div>
              </div>
        `
    })
}
