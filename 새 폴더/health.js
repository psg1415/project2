window.onload = function() {

	addItems(1);



	const add = document.getElementsByClassName("add");



	add[0].addEventListener("click", function() {

		addItems();

	});

};



function addItems(num) {

	num = num || 1;



	for(let i = 0; i < num; i++) {

		const tr = document.createElement("tr");

		const tds = [], inputs = [];

		const names = ["day", "time", "name", "kcal"];



		for(let i = 0; i < 5; i++) {

			tds[i] = document.createElement("td");

			if (i == 4) {

				const span = document.createElement("span");

				const text = document.createTextNode("삭제");

				span.appendChild(text);

				span.className = "delete btn";



				addEventRemoveItem(span);



				tds[i].appendChild(span);



			} else {

				inputs[i] = document.createElement("input");

				inputs[i].setAttribute("type", "text");

				inputs[i].setAttribute("name", names[i]);



				tds[i].appendChild(inputs[i]);

			}



			tr.appendChild(tds[i]);

		}



		const tbody = document.getElementsByTagName("tbody");

		tbody[0].appendChild(tr);

	}

}



function addEventRemoveItem(el) {

	el.addEventListener("click", function(e) {

		const target = e.target;

		const tr = target.parentElement.parentElement;

		const tbody = tr.parentElement;

		tbody.removeChild(tr);

	});

}
