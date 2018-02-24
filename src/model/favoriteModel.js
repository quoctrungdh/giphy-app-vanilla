export default class FavoriteModel {
	constructor() {
		this.favorites = [];
		this.getFavorites = this.getFavorites.bind(this);
		this.addFavorite = this.addFavorite.bind(this);
		this.removeFavorite = this.removeFavorite.bind(this);
	}

	getFavorites() {
		return this.favorites;
	}

	addFavorite(gif) {
		this.favorites.push(gif)
	}

	removeFavorite(gifId) {
		const favorite = this.favorites.find(item => item.id === gifId);
		this.favorites.splice(this.favorites.indexOf(favorite), 1);
	}
}