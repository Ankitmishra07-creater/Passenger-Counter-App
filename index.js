let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
let sum=0
let sumEl=document.getElementById("sum-el")

function increment()
{
    count+=1
    countEl.textContent=count
    
}

function save()
{
    let countstr= count + " - "
    saveEl.textContent+=countstr
    countEl.textContent=0
    sum = sum+count
    sumEl.textContent = sum
    count=0
}





