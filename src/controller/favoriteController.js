import FavoriteModel from '../model/favoriteModel';
import { storage } from '../ultis';

const favoriteStorage = storage('app/favorite');

const favoriteModel = new FavoriteModel();

export function isFavorite(gifId) {
	return favoriteModel.getFavorites().find(id => id === gifId) !== undefined;
}

export function addFavorite(gif) {
	favoriteModel.addFavorite(gif);
	favoriteStorage.save(favoriteModel.getFavorites());
}

export function removeFavorite(gifId) {
	favoriteModel.removeFavorite(gifId)
	favoriteStorage.save(favoriteModel.getFavorites());
}
