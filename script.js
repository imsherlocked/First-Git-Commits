
     var ListingData=[
        {
            "name":"A Medical",
            "location":"ShivajiNagar",
            "city":"Pune",
            
        },
        {
            "name":"B Medical",
            "location":"Kothrud",
            "city":"Pune",

        },
        {
            "name":"C Medical",
            "location":"Warje",
            "city":"Pune",

        },
        {
            "name":"D Medical",
            "location":"Katraj",
            "city":"Pune",

        },
        {
            "name":"E Medical",
            "location":"Prabhat Raod",
            "city":"Pune",

        },
       
    ]


const NameA=document.getElementById("Aitem1");
const LocA=document.getElementById("Aitem2");
const CityA=document.getElementById("Aitem3");
const NameB=document.getElementById("Bitem1");
const LocB=document.getElementById("Bitem2");
const CityB=document.getElementById("Bitem3");

// const Data=JSON.parse(ListingData);
// console.log(Data);



console.log(ListingData)

NameA.innerHTML=ListingData[0].name;
LocA.innerHTML=ListingData[0].location;
CityA.innerHTML=ListingData[0].city;
NameB.innerHTML=ListingData[1].name;
LocB.innerHTML=ListingData[1].location;
CityB.innerHTML=ListingData[1].city;

