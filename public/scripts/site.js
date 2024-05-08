console.log(location)
const displayMenu = async () => {
    const response = await fetch('/api/menu')
    const menu = await response.json()

    const menuTable = document.querySelector('table#menu')

    menu.forEach(item => {
        const tr = document.createElement('tr')
		menuTable.append(tr)

		const tdName = document.createElement('td')
		tdName.textContent = item.name
		tr.append(tdName)
        const tdDescription = document.createElement('td')
		tdDescription.textContent = item.description
		tr.append(tdDescription)

        const tdPrice = document.createElement('td')
		tdPrice.textContent = item.price
		tr.append(tdPrice)
    })
}

const displayEvents=async()=>{
    const response = await fetch('/api/event')
    const event = await response.json() 
    const unorderedlist = document.getElementById('events')
    event.forEach(item=>{
    const li2 = document.createElement('li')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.textContent="Event Name :"+item.name 
    unorderedlist.appendChild(li)
    
    
    li2.textContent+="Location: "+item.location
    ul.appendChild(li2)
    li3 = document.createElement('li')
    li3.textContent+="Date: "+item.date
    ul.appendChild(li3) 
    li4 = document.createElement('li')
    li4.textContent+="Hours: "+item.hours
    ul.appendChild(li4)
    unorderedlist.appendChild(ul)


   
    })
    
}
displayEvents()

displayMenu()




const menuAdd = document.querySelector('#menuAdd')
menuAdd.addEventListener('click', async () => {
    const itemName = document.querySelector('#itemName').value
    const itemDesc = document.querySelector('#itemDesc').value
    const itemPrice = document.querySelector('#itemPrice').value
    const response = await fetch('/api/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: itemName, description: itemDesc, price: itemPrice })
    })
    const menuMessage = document.querySelector('.menuMessage')
    menuMessage.textContent = "Menu Item Added"
})