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