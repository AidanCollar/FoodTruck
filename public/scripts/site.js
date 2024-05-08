
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

displayMenu()

const displayEvents=async()=>{
    const response = await fetch('/api/event')
    const event = await response.json() 
    const para = document.getElementById('events')
    event.forEach(item=>{
    const details = document.createElement('details')
    const summary = document.createElement('summary')
    const li2 = document.createElement('li')
    const ul = document.createElement('ul')
    summary.textContent=item.name

    
    
    li2.textContent+="Location: "+item.location
    ul.appendChild(li2)
    li3 = document.createElement('li')
    li3.textContent+="Date: "+item.date
    ul.appendChild(li3) 
    li4 = document.createElement('li')
    li4.textContent+="Hours: "+item.hours
    ul.appendChild(li4)
    details.appendChild(summary)
    details.appendChild(ul)
    para.appendChild(details)


   
    })
    
}
displayEvents()





// Admin page functionality

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
    if (response.status == 200) menuMessage.textContent = "Menu Item Added"
    // console.log(response)
})

const menuUpdate = document.querySelector('#menuUpdate')
menuUpdate.addEventListener('click', async () => {
    const itemID = document.querySelector('#itemID').value
    const itemName = document.querySelector('#itemName').value
    const itemDesc = document.querySelector('#itemDesc').value
    const itemPrice = document.querySelector('#itemPrice').value
    const response = await fetch(`/api/menu/${itemID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: itemName, description: itemDesc, price: itemPrice })
    })
    const menuMessage = document.querySelector('.menuMessage')
    if (response.status == 200) menuMessage.textContent = "Menu Item Updated"
    // console.log(response)
})


const menuDelete=document.querySelector('#menuDelete')
menuDelete.addEventListener('click',async ()=>{
    const itemID = document.querySelector('#itemID').value
    const response=await fetch(`/api/menu/${itemID}`,{
        method: 'DELETE'
    })
    const menuMessage = document.querySelector('.menuMessage')
    if (response.status == 200) menuMessage.textContent = "Menu Item Deleted"
    console.log(response);

}) 
// Admin page functionality - Events

const eventAdd = document.querySelector('#eventAdd')
eventAdd.addEventListener('click', async () => {
    const eventName = document.querySelector('#eventName').value
    const eventLocation = document.querySelector('#eventLocation').value
    const eventDate = document.querySelector('#eventDate').value
    const eventTime = document.querySelector('#eventTime').value
    const response = await fetch('/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: eventName, location: eventLocation, date: eventDate, hours: eventTime })
    })
    const menuMessage = document.querySelector('.eventMessage')
    if (response.status == 200) menuMessage.textContent = "Event Added"
    // console.log(response)
})

const eventUpdate = document.querySelector('#eventUpdate')
eventUpdate.addEventListener('click', async () => {
    const eventID = document.querySelector('#eventID').value
    const eventName = document.querySelector('#eventName').value
    const eventLocation = document.querySelector('#eventLocation').value
    const eventDate = document.querySelector('#eventDate').value
    const eventTime = document.querySelector('#eventTime').value
    const response = await fetch(`/api/event/${eventID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: eventName, location: eventLocation, date: eventDate, hours: eventTime })
    })
    const menuMessage = document.querySelector('.eventMessage')
    if (response.status == 200) menuMessage.textContent = "Event Updated"
    // console.log(response)
})


const eventDelete=document.querySelector('#eventDelete')
eventDelete.addEventListener('click',async ()=>{
    const eventID = document.querySelector('#eventID').value
    const response=await fetch(`/api/event/${eventID}`,{
        method: 'DELETE'
    })
    const menuMessage = document.querySelector('.eventMessage')
    if (response.status == 200) menuMessage.textContent = "Event Deleted"
    console.log(response);

})