export const storage = key => ({
	save(data) {
		try {
			localStorage.setItem(key, JSON.stringify(data));
		} catch (error) {
			console.log(`Error when saving data ${error}`)
		}
	},
	load() {
		try {
			return JSON.parse(localStorage.getItem(key)) || undefined
		} catch (error) {
			return undefined;
		}
	}
})