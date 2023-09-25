const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

function sum(){
    let sum=0;
	const prices=document.querySelectorAll(".price");
	prices.forEach((item)=>{
        sum+=parseInt(item.textContent);
    })
    console.log(sum);
    document.querySelector("table").innerHTML+=`
            <tr id="ans">
                <td></td>
                <td>${sum}</td>
            </tr>
    `
}
getSumBtn.addEventListener("click", sum)