const CartPrice = () => {
	const cardWrap = document.querySelector(".cart-wrap")
	const itemCount = document.querySelector(".item-count1").innerText
	const price1 = document.querySelector(".price-cost").innerText
	const price = parseInt(price1.replace(/\D/g, ''));
	const totalPrice = price * itemCount
	const total = document.querySelector(".total-price")
	total.textContent = totalPrice
}


const statusCart = () => {
	const cartWrap = document.querySelector('.cart-wrap')
	const cartEmpty = document.querySelector('.cart-empty')
	const order = document.querySelector('.other')
	const cartTotal = document.querySelector('.cart-total')
	if (cartWrap.children.length > 0) {
		cartEmpty.classList.add('none')
		order.classList.remove('none')
		cartTotal.classList.remove('none')
		CartPrice()
	} else {
		cartEmpty.classList.remove('none')
		order.classList.add('none')
		cartTotal.classList.add('none')
	}
}
