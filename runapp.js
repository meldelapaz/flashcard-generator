exports.flashCard = function flashCard(front,back) {
	this.front = front;
	this.back = back
};

exports.clozeCard = function clozeCard(clozeDeleted, clozePartial, clozeFull) {
	this.clozeDeleted = clozeDeleted;
	this.clozePartial = clozePartial;
	this.clozeFull = clozeFull;
};
