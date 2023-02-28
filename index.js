const value = document.querySelectorAll(".serves")
const input = document.querySelectorAll(".inpServe")
const list = document.querySelectorAll(".ingList")
console.log(list)
console.log(value, input)

value.innerHTML = parseInt(input.value)
for (let i = 0; i < value.length; i++) {

    let baseVal = value[i].textContent
    console.log(baseVal)
    // value[i].innerHTML = input[i].value
    input[i].addEventListener("input", (event) => {

        // console.log(input[i].value)
        value[i].innerHTML = parseInt(event.target.value)
        let currVal = parseInt(event.target.value)
        const childrenList = list[i].children

        for (let j = 0; j < childrenList.length; j++) {

            if (!childrenList[j].classList.contains("ingItem")) {
                childrenList[j].classList.add("ingItem")
            }

            const item = childrenList[j].children[0]

            if (item != undefined) {

                let itemVal = eval(item.innerHTML)
                console.log(currVal, itemVal, baseVal)
                item.innerHTML = (currVal * itemVal) / (currVal - baseVal)

            }
        }
    })
}




