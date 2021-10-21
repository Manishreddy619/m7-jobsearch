export const api = `https://strive-jobs-api.herokuapp.com/jobs?company=${''}&limit=40&skip=10`;
export const getjobs = async () => {
	try {
		const apiResp = await fetch(api, {
			method: 'GET',
		});
		if (apiResp.ok) {
			let jobs = await apiResp.json();

			return jobs;
		} else if (apiResp.status > 400 && apiResp.status < 500) {
			throw new Error('Client Side Error');
		} else if (apiResp.status > 500) {
			throw new Error('Server Side Error');
		}
	} catch (err) {
		throw err;
	}
};
