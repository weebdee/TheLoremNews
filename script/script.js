class Cards {
	constructor(title, descr){
		this.title = title
        this.descr = descr
	}

	render() {
		const wrapper = document.querySelector('.cardWrapper')
		const card = document.createElement('div')
		card.classList.add('news__item')

		card.innerHTML = `
        <div class="news_item">
            <h3 class="news_item-title">${this.title}<h3>
            <div class="news_item-descr">${this.descr}</div>
        </div>
		`

		wrapper.append(card)
	}
}

async function getCard(url) {
	const res = await fetch(url)

	if(!res.ok) {
		throw new Error (`'Cannot fetch ${url}, status ${res.status}'`)
	} 

	return await res.json()
}

getCard('https://jsonplaceholder.typicode.com/posts')
	.then(data => {
		data.forEach(({title, body}) => {
			new Cards(title, body).render()
		})
	})


