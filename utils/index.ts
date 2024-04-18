export async function fetchCars() {
    const headers =  {
		'X-RapidAPI-Key': '5d0a18c70fmsh91a43ffb289f473p1689bfjsnc32b654aaa04',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    return result;

}
