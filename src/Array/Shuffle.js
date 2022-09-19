/**
* In-place array shuffle
* @memberof Array#
* @instance
* @function Shuffle
*/
Define(Array.prototype, 'Shuffle', function (seed = 1000) {
	let i, j, shuffleItem
	if (this.length <= 2) {
		return this
	}

	for (i = 0; i < this.length - 2; i++) {
		j = (Math.round(Math.random() * seed) + i) % this.length;
		shuffleItem = this[i]
		this[i] = this[j]
		this[j] = shuffleItem
	}
	return this
})
