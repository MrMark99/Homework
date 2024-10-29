const cartWrap = document.querySelector('.cart-wrap')



window.addEventListener('click', e => {
	if (e.target.hasAttribute('data-cart')) {
		const card = e.target.closest('.card')
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			weight: card.querySelector('.price-weight').innerText,
			price: card.querySelector('.price-cost').innerText,
			counter: card.querySelector('[data-count]').innerText,
		}
		const itemCard = cartWrap.querySelector(`[data-id="${productInfo.id}"]`)
		if (itemCard) {
			const counterEl = itemCard.querySelector('[data-count]')
			counterEl.innerText =
				parseInt(counterEl.innerText) + parseInt(productInfo.counter)
		} else {
			const cartItemHtml = `
											<div class="card card-item" data-id="${productInfo.id}">
								<img src="img/4.jpg" alt="" class="product-img" />
								<h3 class="item-title"${productInfo.title}"</h3>
								<p class="text-count">1 шт</p>
								<div class="wrap">
									<div class="item count-wrap">
										<div class="item-control" data-action="minus">-</div>
										<div class="item-count1" data-count>${productInfo.counter}</div>
										<div class="item-control" data-action="plus">+</div>
									</div>
									<div class="price">
										<div class="price-weight">${productInfo.weight}</div>
										<div class="price-cost">${productInfo.price}</div>
									</div>
								</div>
								 <button class="btn btn-danger remove-btn">Видалити</button>
							</div>
			`
			cartWrap.insertAdjacentHTML('beforeend', cartItemHtml)
		}
		card.querySelector('[data-count]').innerText = '1'
		statusCart()
	}
})
