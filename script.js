const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f9974cc93msh56fea43f50d304fp1609b2jsnd7eb52f04ed5',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles', options)
	.then(response => response.json())
	.then((data) => {
		let data1 = "";
		Object.values(data.results).forEach((item) => {
			let src;
			if(item.primaryImage === null){
				src="http://bitly.ws/zboJ"
			}else{
				src = item.primaryImage.url
			}
			data1 += `
			<div class="card" style="width:400px">
                <img src="${src}" width="100%" height="200px" class="card-img-top">
                <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">${item.titleText.text}</p>
                <a href="#" class="btn btn-primary">See Profile</a>
                </div>
            </div>            
			`
			document.getElementById("card-container").innerHTML = data1;
			
		})	
	})
	.catch(err => console.error(err))
	


/*  DOM
 Interplation - used to access declared values inside a DOM Element. $

 Dot notation
 console.log(data.results)

 ternary operator
 {dark ? "black" : "white"}
*/