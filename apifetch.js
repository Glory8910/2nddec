function create(name, ele, clas, id) {
    var name = document.createElement(ele);
    name.setAttribute('class',clas);
    name.id = id
    return name

}


var cont = create(cont, 'div', 'container', 'containerbox')

cont.classlist="row"
var cardbox = create(cardbox, 'div', "row", 'cardout');
cont.append(cardbox)



document.body.append(cont);
getapi();

console.log('weco')

async function getapi() {
    try {
        var data = await fetch('https://restcountries.eu/rest/v2/all');
       
        var displist = await data.json();
        console.log('hii')
        console.log(displist);
        combine(displist);
        return (displist);

    }
    catch {
        console.log('error in retcountries')
    }


}

function combine(val) {
    val.forEach(e => {
        fetchedui(e);
        function fetchedui(e) {


         

            var card = cardcre(card);


            function cardcre(card) {

                var card = create(card, 'div', "card")
                card.style = "width: 18rem"
                card.classlist=" col col-lg-4 col-sm-12"
                card.id='cards'


                return card

            }
            
            cardbox.append(card)


            var cardtitle = titlecre(cardtitle)



            function titlecre(cardtitle) {
                names = e.name;


                cardtitle = create(cardtitle, 'h5', 'card-header')
                cardtitle.style = "text-align:center"

                cardtitle.innerHTML = names
                return cardtitle

            }

            card.append(cardtitle)

            var cardbody = cardbodycre(cardbody);
            cardbody.style = "text-align:center"

            function cardbodycre(carbody) {
                var cardbody = create(carbody, 'div', 'car-body ',"door");


                return cardbody
            }
            card.append(cardbody);

            var imagebox = imageboxcre(imagebox);

           
            function imageboxcre(imagebox) {
                urlflag = e.flag
                var imagebox = create(imagebox, 'img', 'imageline','imgflag')
                imagebox.src = urlflag
                imagebox.classList = "card-img-top"
                return imagebox;
            }

            cardbody.append(imagebox)

            var list = create(list, 'ul', "list-group list-group-flush")

            var cap = e.capital
            var lat = e.latlng[0]
            var lang = e.latlng[1]
            var lating = lat + " " + lang

            var Reg = e.region

            var cursym = e.currencies[0].symbol
            let curname = e.currencies[0].name
            var curencynamesym = cursym + " " + curname


            var capital = create(capital, 'li', "list-group list-group-flush")
            capital.innerHTML = "capital:" + " " + cap



            var currency = create(currency, 'li', "list-group list-group-flush")
            currency.innerHTML = "currency:" + " " + curencynamesym

            var Region1 = create(Region1, 'li', "list-group list-group-flush")
            Region1.innerHTML = "Region area:" + " " + Reg;

            var lattitude = create(lattitude, 'li', "list-group list-group-flush")
            lattitude.innerHTML = "lattitue:" + " " + lating

            


            cardbody.append(list)
            list.append(capital, currency, Region1, lattitude)

            var button = create(button, 'button', 'btn-btn-primary')
            button.type = "button"
            button.innerHTML = "click for weather"
            button.style = "text-align:center"
            button.id = "btn-no-" + val.indexOf(e)

            cardbody.append(button)

            button.addEventListener('click', fecthclimate)

            function fecthclimate() {
                function latlangval(lt, lg) {
                    var url1= 'http://api.openweathermap.org/data/2.5/weather?lat='
                    var url2='&lon='
                    var url3='&appid=2aeb665966fc5056307e3a035744f63c'
                     
                    var url=url1+lt+url2+lg+url3;
            

               async function weatherdata(url) {
                        var data = await fetch(url);
                        var datajson = await data.json();
                        console.log(datajson)
                        let weather=datajson.weather[0].description
                        let temp=datajson.main.temp
                        alert('hi todays weather is' + " "+weather+"  "+"temperature is"+" "+temp)
                        return (datajson);
                    }
                    weatherdata(url);

               

                }
                latlangval(lat, lang);
            }
            // button.onclick=giveid(this.id);
            // function giveid(el){
            //       var a=el.id;
            //     console.log(a)
            // }  'http://api.openweathermap.org/data/2.5/weather?lat=33&lon=65&appid=2aeb665966fc5056307e3a035744f63c'


        }


    });
}