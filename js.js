const education = document.getElementById("education");  
const family = document.getElementById("family");
const skills = document.getElementsByClassName('skills');
const age = document.getElementsByName("age");
const reputation =document.getElementsByClassName("gossip");
const result = document.getElementById('result');
const btnShow = document.querySelector("button");

const code = () => {
    let sum = Number(document.getElementById("bid").value);  
    let name= document.getElementById("name").value;
    let letter = document.getElementById("letter").value;
    sum = getValuePrice(education, sum); // Why don't u use function composition here? f(g(x)) >> because i do not wanna use it and also some difficulities with that
    sum = getValuePrice(family, sum);
    for (let i = 0; i <skills.length; i++) {
        if (skills[i].checked) {
            sum = sum + parseInt(skills[i].value);
        }
    }
    sum = getRadioValue(age, sum);
    sum = getCheckboxValuesForLoop(reputation, sum);
    let person = {
        bride_name: name,
        bride_price: sum,
        bride_letter: letter
    }

    result.innerHTML = `The price for ${person.bride_name} is ${person.bride_price} and love letter for ${person.bride_name} is ${person.bride_letter}`; // For ES6 template string we use backquotes ``
};

const getValuePrice = (element, sum) => {
    return sum * element.value;
}

const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

const getCheckboxValuesForLoop = (html_collection, price) => { 
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}

btnShow.addEventListener("click",code);