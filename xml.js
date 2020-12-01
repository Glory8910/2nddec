


function getapi() {
    return new Promise(function (resolve, reject) {

        var reply = ''
        var value = ""


        console.log('start')
        let xml = new XMLHttpRequest;
        xml.open('GET', 'https://restcountries.eu/rest/v2/all', true);
        xml.send();
        xml.onload = function () {
            reply = JSON.parse(this.response);
            console.log(reply);
            value = reply




            if (reply) {
                resolve(reply);
                console.log('iam reply', reply)
            }
            else {
                reject('not get values')
            }

        }
    })
}

getapi()
    .then(
        function (repygot) {

            var containerbox = document.createElement('div')
            containerbox.classList = "container"
            document.body.append(containerbox)
            containerbox.classList = "row"




            var row1 = document.createElement('div')
            row1.classList = "row";


            for (let i = 0; i < 9; i = i + 3) {
                var name = repygot[i].name

                var colordiv = document.createElement('div')
                colordiv.style = "background-color:green"
                colordiv.style = "color:white"
                colordiv.innerHTML = repygot[0].capital


                var cap = repygot[i].capital


                let currcode = repygot[i].currencies[0].code

                var lat = repygot[i].latlng[0]
                let lang = repygot[i].latlng[1]
                var lating = lat + " " + lang

                var urlflag = repygot[i].flag;
                var reg = repygot[i].region


                var cursym = repygot[i].currencies[0].symbol
                let curname = repygot[i].currencies[0].name
                var curencynamesym = cursym + " " + curname






                var cardbox = document.createElement('div')
                cardbox.setAttribute('class', "card");
                cardbox.classList = "col-4"
                cardbox.setAttribute('style', "width: 18rem")



                var cardtitle = document.createElement('h5')
                cardtitle.classList = "card-header";
                cardtitle.innerHTML = name
                cardbox.append(cardtitle)

                var imagebox = document.createElement('img')
                imagebox.src = urlflag
                imagebox.classList = "card-img-top"
                cardbox.append(imagebox)


                var list = document.createElement('ul')
                list.classList = "list-group list-group-flush"
                cardbox.append(list)

                var value1 = document.createElement('li')
                value1.classList = "list-group-item"
                value1.innerHTML = "capital:" + " " + cap

                var value2 = document.createElement('li')
                value2.classList = "list-group-item"
                value2.innerHTML = "currency:" + " " + curencynamesym

                var value3 = document.createElement('li')
                value3.classList = "list-group-item"
                value3.innerHTML = "Region:" + " " + reg




                var value4 = document.createElement('li')
                value4.classList = "list-group-item"
                value4.innerHTML = "lattitue:" + " " + lating




                row1.append(cardbox);
                list.append(value1, value2, value3, value4)


            }
            containerbox.append(row1);
            var row2 = document.createElement('div')
            row2.classList = "row";


            for (let i1 = 1; i1 < 9; i1 = i1 + 3) {
                var name1 = repygot[i1].name




                var cap1 = repygot[i1].capital


                let currcode1 = repygot[i1].currencies[0].code

                var lat1 = repygot[i1].latlng[0]
                let lang1 = repygot[i1].latlng[1]
                var lating1 = lat1 + " " + lang1

                var urlflag1 = repygot[i1].flag;
                var reg1 = repygot[i1].region


                var cursym1 = repygot[i1].currencies[0].symbol
                let curname1 = repygot[i1].currencies[0].name
                var curencynamesym1 = cursym1 + " " + curname1



                var cardbox1 = document.createElement('div')
                cardbox1.setAttribute('class', "card");
                cardbox1.setAttribute('style', "width: 18rem")
                cardbox1.classList = "col-4"


                var cardtitle1 = document.createElement('h5')
                cardtitle1.classList = "card-header";
                cardtitle1.innerHTML = name1
                cardbox1.append(cardtitle1)

                var imagebox1 = document.createElement('img')
                imagebox1.src = urlflag1
                imagebox1.classList = "card-img-top"
                cardbox1.append(imagebox1)


                var list1 = document.createElement('ul')
                list1.classList = "list-group list-group-flush"
                cardbox1.append(list1)

                var value1 = document.createElement('li')
                value1.classList = "list-group-item"
                value1.innerHTML = "capital:" + " " + cap1

                var value2 = document.createElement('li')
                value2.classList = "list-group-item"
                value2.innerHTML = "currency:" + " " + curencynamesym1

                var value3 = document.createElement('li')
                value3.classList = "list-group-item"
                value3.innerHTML = "Region:" + " " + reg1




                var value4 = document.createElement('li')
                value4.classList = "list-group-item"
                value4.innerHTML = "lattitue:" + " " + lating1




                containerbox.append(cardbox1);
                list1.append(value1, value2, value3, value4)
                row2.append(cardbox1);

            }
            containerbox.append(row2);

            var row3 = document.createElement('div')
            row3.classList = "row";

            for (let i = 2; i < 9; i = i + 3) {
                var name2 = repygot[i].name


                var cap2 = repygot[i].capital


                let currcode2 = repygot[i].currencies[0].code

                var lat2 = repygot[i].latlng[0]
                let lang2 = repygot[i].latlng[1]
                var lating2 = lat2 + " " + lang2

                var urlflag2 = repygot[i].flag;
                var reg2 = repygot[i].region


                var cursym2 = repygot[i].currencies[0].symbol
                let curname2 = repygot[i].currencies[0].name
                var curencynamesym2 = cursym2 + " " + curname2



                var cardbox2 = document.createElement('div')
                cardbox2.setAttribute('class', "card");
                cardbox2.setAttribute('style', "width: 18rem")
                cardbox2.classList = "col-4"


                var cardtitle2 = document.createElement('h5')
                cardtitle2.classList = "card-header";
                cardtitle2.innerHTML = name2
                cardbox2.append(cardtitle2)

                var imagebox2 = document.createElement('img')
                imagebox2.src = urlflag2
                imagebox2.classList = "card-img-top"
                cardbox2.append(imagebox2)


                var list2 = document.createElement('ul')
                list2.classList = "list-group list-group-flush"
                cardbox2.append(list2)

                var value1 = document.createElement('li')
                value1.classList = "list-group-item"
                value1.innerHTML = "capital:" + " " + cap2

                var value2 = document.createElement('li')
                value2.classList = "list-group-item"
                value2.innerHTML = "currency:" + " " + curencynamesym2

                var value3 = document.createElement('li')
                value3.classList = "list-group-item"
                value3.innerHTML = "Region:" + " " + reg2




                var value4 = document.createElement('li')
                value4.classList = "list-group-item"
                value4.innerHTML = "lattitue:" + " " + lating2




                row3.append(cardbox2);
                list2.append(value1, value2, value3, value4)


            }

            containerbox.append(row3);
          
        }

    )
    .catch (function (err) {
    console.error(err);
});

















