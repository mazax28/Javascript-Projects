const calculate = document.getElementsByClassName('calculate')[0];
const date = document.getElementsByClassName('date')[0];

const age = document.getElementsByClassName('age')[0];

date.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(date.value);
    
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();
    let today = new Date();
    let d2 = today.getDate() 
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let m, d;
    let age1 = y2 - y1;
    if (m2>=m1){
        m = m2 - m1;
    }
    else{
        age1--;
        m = 12 + m2 - m1;
    }
    if (d2>=d1){
        d = d2 - d1;
    }
    else{
        m--;
        d = 30 + d2 - d1;
    }
    let newAge = `You are ${age1} years, ${m} months and ${d} days old`
    age.innerText = newAge ;

}

calculate.addEventListener('click', calculateAge);
