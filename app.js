//task 1:
//ლექციაზე განხილული მაგალითის მიხედვით:
//html მხარეს გექნებათ ერთი ინფუთი და ღილაკი
//მომხმარებელს შემოჰყავს ტექსტი და საბმითის შემდეგ შემოყვანილი ტექსტი ემატება html მხარეს ul ში.
//შემოყვანილ ტექსტთან ერთად ემატება წაშლის ღილაკიც (ლექციაზე ჩექბოქსი გვქონდა).
//ღილაკზე დაჭერის შემდეგ უნდა წაიშალოს ის მთლიანი li ელემენტი, რომლის ღილაკზეც მოხდა დაჭერა.

const form1 = document.getElementById('form1');
const input1 = document.getElementById('input1');
const myUl = document.getElementById('myul');

form1.addEventListener('submit', function(event) {
    event.preventDefault();

    if (input1.value.trim()) {
        const btn2 = document.createElement('button');
        const li = document.createElement('li');


        li.textContent = input1.value;
        myUl.appendChild(li);
        li.appendChild(btn2);
        btn2.textContent = 'Delete';

        btn2.addEventListener('click', function() {
            li.remove();
        })

        input1.value = '';
        input1.focus();
    }
})