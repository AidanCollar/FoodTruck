
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