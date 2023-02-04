 const users = [
{"id":1,"firstName":"Tamma","lastName":"Langer","email":"tlanger0@a8.net","gender":"Female","money":"$333.43","country":"Russia"},
{"id":2,"firstName":"Jeremy","lastName":"Helgass","email":"jhelgass1@eepurl.com","gender":"Male","money":"$2227.93","country":"Indonesia"},
{"id":3,"firstName":"Lucas","lastName":"Brommage","email":"lbrommage2@bloglovin.com","gender":"Male","money":"$4836.55","country":"France"},
{"id":4,"firstName":"Gerrard","lastName":"Heibl","email":"gheibl3@admin.ch","gender":"Male","money":"$8184.83","country":"China"},
{"id":5,"firstName":"Gretta","lastName":"Cornwell","email":"gcornwell4@weebly.com","gender":"Agender","money":"$3891.13","country":"China"},
{"id":6,"firstName":"Corry","lastName":"Briddock","email":"cbriddock5@ox.ac.uk","gender":"Female","money":"$1193.88","country":"China"},
{"id":7,"firstName":"Ad","lastName":"Corryer","email":"acorryer6@addtoany.com","gender":"Male","money":"$547.67","country":"Russia"},
{"id":8,"firstName":"Sephira","lastName":"Ivanyukov","email":"sivanyukov7@yelp.com","gender":"Female","money":"$3246.51","country":"China"},
{"id":9,"firstName":"Sid","lastName":"Dulake","email":"sdulake8@phoca.cz","gender":"Male","money":"$8648.79","country":"Indonesia"},
{"id":10,"firstName":"Vania","lastName":"Anan","email":"vanan9@cpanel.net","gender":"Female","money":"$5960.95","country":"China"},
{"id":11,"firstName":"Free","lastName":"Dugood","email":"fdugooda@simplemachines.org","gender":"Male","money":"$4444.05","country":"China"},
{"id":12,"firstName":"Desmund","lastName":"Shiers","email":"dshiersb@qq.com","gender":"Male","money":"$8090.01","country":"China"},
{"id":13,"firstName":"Teodora","lastName":"Keddey","email":"tkeddeyc@paypal.com","gender":"Female","money":"$573.25","country":"Russia"},
{"id":14,"firstName":"Prissie","lastName":"Bausmann","email":"pbausmannd@qq.com","gender":"Female","money":"$6525.11","country":"China"},
{"id":15,"firstName":"Heddi","lastName":"Giacomi","email":"hgiacomie@devhub.com","gender":"Genderfluid","money":"$9336.36","country":"China"},
{"id":16,"firstName":"Shepard","lastName":"Spellissy","email":"sspellissyf@newsvine.com","gender":"Male","money":"$9409.33","country":"China"},
{"id":17,"firstName":"Derrik","lastName":"Torresi","email":"dtorresig@list-manage.com","gender":"Male","money":"$9530.83","country":"China"},
{"id":18,"firstName":"Pennie","lastName":"Ferrey","email":"pferreyh@blogger.com","gender":"Female","money":"$7232.07","country":"China"},
{"id":19,"firstName":"Fawn","lastName":"Lamba","email":"flambai@unc.edu","gender":"Agender","money":"$6564.55","country":"China"},
{"id":20,"firstName":"Gwenny","lastName":"Tadman","email":"gtadmanj@indiatimes.com","gender":"Female","money":"$9903.43","country":"France"},
{"id":21,"firstName":"Clemmy","lastName":"Winwright","email":"cwinwrightk@upenn.edu","gender":"Genderqueer","money":"$8509.52","country":"China"},
{"id":22,"firstName":"Leonora","lastName":"Diess","email":"ldiessl@hatena.ne.jp","gender":"Female","money":"$9892.33","country":"China"},
{"id":23,"firstName":"Minny","lastName":"Macquire","email":"mmacquirem@xing.com","gender":"Female","money":"$8399.58","country":"Indonesia"},
{"id":24,"firstName":"Ripley","lastName":"Kuzma","email":"rkuzman@seesaa.net","gender":"Male","money":"$2955.93","country":"France"},
{"id":25,"firstName":"Chrisse","lastName":"Temby","email":"ctembyo@disqus.com","gender":"Agender","money":"$5116.18","country":"Indonesia"},
{"id":26,"firstName":"Brockie","lastName":"Lippini","email":"blippinip@forbes.com","gender":"Male","money":"$2150.51","country":"France"},
{"id":27,"firstName":"Loralie","lastName":"Ferson","email":"lfersonq@hugedomains.com","gender":"Female","money":"$9528.57","country":"Russia"},
{"id":28,"firstName":"Jeanelle","lastName":"Dowson","email":"jdowsonr@creativecommons.org","gender":"Female","money":"$160.12","country":"United States"},
{"id":29,"firstName":"Bobinette","lastName":"Abramof","email":"babramofs@goo.ne.jp","gender":"Female","money":"$7210.00","country":"Russia"},
{"id":30,"firstName":"Payton","lastName":"Alasdair","email":"palasdairt@ed.gov","gender":"Male","money":"$5816.88","country":"China"},
{"id":31,"firstName":"Christan","lastName":"Smidmoor","email":"csmidmooru@state.tx.us","gender":"Female","money":"$6050.79","country":"Indonesia"},
{"id":32,"firstName":"Earvin","lastName":"Gaw","email":"egawv@ow.ly","gender":"Male","money":"$942.44","country":"Indonesia"},
{"id":33,"firstName":"Jackqueline","lastName":"Royds","email":"jroydsw@newyorker.com","gender":"Female","money":"$4780.69","country":"Iran"},
{"id":34,"firstName":"James","lastName":"Senecaux","email":"jsenecauxx@thetimes.co.uk","gender":"Male","money":"$1914.87","country":"China"},
{"id":35,"firstName":"Harlie","lastName":"Fitt","email":"hfitty@blogspot.com","gender":"Female","money":"$3108.83","country":"United States"},
{"id":36,"firstName":"Major","lastName":"Gook","email":"mgookz@ask.com","gender":"Male","money":"$5099.92","country":"China"},
{"id":37,"firstName":"Godfree","lastName":"Gallemore","email":"ggallemore10@about.me","gender":"Male","money":"$1320.98","country":"Russia"},
{"id":38,"firstName":"Francesco","lastName":"Cronshaw","email":"fcronshaw11@wikia.com","gender":"Male","money":"$9107.66","country":"France"},
{"id":39,"firstName":"Skye","lastName":"Mardy","email":"smardy12@usnews.com","gender":"Male","money":"$7557.14","country":"China"},
{"id":40,"firstName":"Gloriana","lastName":"Abramson","email":"gabramson13@geocities.com","gender":"Female","money":"$3744.06","country":"United States"},
{"id":41,"firstName":"Susann","lastName":"Anthoine","email":"santhoine14@timesonline.co.uk","gender":"Female","money":"$6541.31","country":"Russia"},
{"id":42,"firstName":"Belia","lastName":"O'Kennavain","email":"bokennavain15@mail.ru","gender":"Female","money":"$8762.38","country":"France"},
{"id":43,"firstName":"Gabriel","lastName":"Pinchon","email":"gpinchon16@infoseek.co.jp","gender":"Bigender","money":"$8612.85","country":"France"},
{"id":44,"firstName":"Myrilla","lastName":"Petow","email":"mpetow17@wikimedia.org","gender":"Female","money":"$2901.03","country":"Indonesia"},
{"id":45,"firstName":"Alick","lastName":"Dener","email":"adener18@dagondesign.com","gender":"Male","money":"$7673.02","country":"United States"},
{"id":46,"firstName":"Dela","lastName":"Sudlow","email":"dsudlow19@hc360.com","gender":"Female","money":"$8139.41","country":"China"},
{"id":47,"firstName":"Smith","lastName":"Spedding","email":"sspedding1a@delicious.com","gender":"Male","money":"$7713.36","country":"China"},
{"id":48,"firstName":"Jo-ann","lastName":"Purselow","email":"jpurselow1b@psu.edu","gender":"Genderfluid","money":"$4543.74","country":"China"},
{"id":49,"firstName":"Lorens","lastName":"Bargh","email":"lbargh1c@nationalgeographic.com","gender":"Male","money":"$7818.10","country":"Indonesia"},
{"id":50,"firstName":"Godard","lastName":"Shand","email":"gshand1d@imgur.com","gender":"Male","money":"$107.13","country":"China"},
{"id":51,"firstName":"Margaret","lastName":"Rangeley","email":"mrangeley1e@hugedomains.com","gender":"Female","money":"$6706.32","country":"China"},
{"id":52,"firstName":"Agretha","lastName":"Bishell","email":"abishell1f@theglobeandmail.com","gender":"Female","money":"$9406.72","country":"Russia"},
{"id":53,"firstName":"Tarrance","lastName":"Huttley","email":"thuttley1g@naver.com","gender":"Male","money":"$8632.61","country":"China"},
{"id":54,"firstName":"Milt","lastName":"Gilardone","email":"mgilardone1h@usnews.com","gender":"Male","money":"$4348.84","country":"Russia"},
{"id":55,"firstName":"Mortie","lastName":"Conti","email":"mconti1i@marriott.com","gender":"Male","money":"$4768.23","country":"Indonesia"},
{"id":56,"firstName":"Blane","lastName":"McGrail","email":"bmcgrail1j@friendfeed.com","gender":"Male","money":"$7088.67","country":"Indonesia"},
{"id":57,"firstName":"Elton","lastName":"Labarre","email":"elabarre1k@etsy.com","gender":"Male","money":"$6948.49","country":"United States"},
{"id":58,"firstName":"Ambrosio","lastName":"Catterill","email":"acatterill1l@yellowpages.com","gender":"Male","money":"$9994.95","country":"Russia"},
{"id":59,"firstName":"Bunnie","lastName":"Whenman","email":"bwhenman1m@tumblr.com","gender":"Female","money":"$4338.07","country":"China"},
{"id":60,"firstName":"Robinson","lastName":"MacKilroe","email":"rmackilroe1n@phpbb.com","gender":"Male","money":"$6846.15","country":"Indonesia"},
{"id":61,"firstName":"Giana","lastName":"Jagoe","email":"gjagoe1o@cyberchimps.com","gender":"Female","money":"$6935.11","country":"Russia"},
{"id":62,"firstName":"Norris","lastName":"Monnery","email":"nmonnery1p@army.mil","gender":"Male","money":"$2936.90","country":"United States"},
{"id":63,"firstName":"Jessa","lastName":"Goodhay","email":"jgoodhay1q@bbb.org","gender":"Female","money":"$8115.24","country":"Indonesia"},
{"id":64,"firstName":"Alonso","lastName":"Starton","email":"astarton1r@alexa.com","gender":"Male","money":"$9718.35","country":"China"},
{"id":65,"firstName":"Malcolm","lastName":"Dale","email":"mdale1s@etsy.com","gender":"Genderqueer","money":"$9449.69","country":"China"},
{"id":66,"firstName":"Irwinn","lastName":"D'Antonio","email":"idantonio1t@va.gov","gender":"Male","money":"$2292.06","country":"China"},
{"id":67,"firstName":"Frasquito","lastName":"Telezhkin","email":"ftelezhkin1u@ox.ac.uk","gender":"Male","money":"$7282.74","country":"Indonesia"},
{"id":68,"firstName":"Dotty","lastName":"Taillant","email":"dtaillant1v@umich.edu","gender":"Agender","money":"$5381.93","country":"Russia"},
{"id":69,"firstName":"Charlotte","lastName":"Farraway","email":"cfarraway1w@wsj.com","gender":"Female","money":"$1006.27","country":"Indonesia"},
{"id":70,"firstName":"Jethro","lastName":"Aiken","email":"jaiken1x@discuz.net","gender":"Non-binary","money":"$6426.39","country":"China"},
{"id":71,"firstName":"Korie","lastName":"Meenan","email":"kmeenan1y@hubpages.com","gender":"Female","money":"$2268.21","country":"China"},
{"id":72,"firstName":"Jacynth","lastName":"Cadlock","email":"jcadlock1z@wikispaces.com","gender":"Female","money":"$6296.95","country":"United States"},
{"id":73,"firstName":"Valentine","lastName":"Orsman","email":"vorsman20@usatoday.com","gender":"Male","money":"$9744.36","country":"China"},
{"id":74,"firstName":"Lon","lastName":"Limpenny","email":"llimpenny21@npr.org","gender":"Male","money":"$1107.04","country":"China"},
{"id":75,"firstName":"Lissy","lastName":"Thacker","email":"lthacker22@hud.gov","gender":"Female","money":"$8524.11","country":"Indonesia"},
{"id":76,"firstName":"Claresta","lastName":"Blondell","email":"cblondell23@mapquest.com","gender":"Female","money":"$6317.42","country":"China"},
{"id":77,"firstName":"Hayyim","lastName":"Farryan","email":"hfarryan24@infoseek.co.jp","gender":"Male","money":"$7040.80","country":"China"},
{"id":78,"firstName":"Tessa","lastName":"Pena","email":"tpena25@epa.gov","gender":"Female","money":"$2800.48","country":"China"},
{"id":79,"firstName":"Gypsy","lastName":"Avramchik","email":"gavramchik26@nba.com","gender":"Female","money":"$7605.23","country":"China"},
{"id":80,"firstName":"Brandy","lastName":"Friday","email":"bfriday27@washington.edu","gender":"Genderfluid","money":"$9438.67","country":"Indonesia"},
{"id":81,"firstName":"Bird","lastName":"Creek","email":"bcreek28@yandex.ru","gender":"Female","money":"$8775.48","country":"Indonesia"},
{"id":82,"firstName":"Cristiano","lastName":"Kless","email":"ckless29@apache.org","gender":"Male","money":"$9395.09","country":"Indonesia"},
{"id":83,"firstName":"Enriqueta","lastName":"Deddum","email":"ededdum2a@examiner.com","gender":"Female","money":"$5183.48","country":"Indonesia"},
{"id":84,"firstName":"Burl","lastName":"Vynarde","email":"bvynarde2b@jiathis.com","gender":"Male","money":"$2712.15","country":"Indonesia"},
{"id":85,"firstName":"Isador","lastName":"Barbisch","email":"ibarbisch2c@4shared.com","gender":"Polygender","money":"$9234.72","country":"United States"},
{"id":86,"firstName":"Stephenie","lastName":"Forgie","email":"sforgie2d@bloomberg.com","gender":"Female","money":"$3282.70","country":"China"},
{"id":87,"firstName":"Flory","lastName":"Hellwig","email":"fhellwig2e@cargocollective.com","gender":"Female","money":"$2663.42","country":"China"},
{"id":88,"firstName":"Corrina","lastName":"Havelin","email":"chavelin2f@jimdo.com","gender":"Female","money":"$7249.80","country":"China"},
{"id":89,"firstName":"Guillema","lastName":"Seeman","email":"gseeman2g@addthis.com","gender":"Female","money":"$1905.61","country":"China"},
{"id":90,"firstName":"Franky","lastName":"Feldhorn","email":"ffeldhorn2h@phoca.cz","gender":"Male","money":"$166.30","country":"Russia"},
{"id":91,"firstName":"Larine","lastName":"Cazin","email":"lcazin2i@howstuffworks.com","gender":"Female","money":"$9929.62","country":"France"},
{"id":92,"firstName":"Tony","lastName":"Flintoff","email":"tflintoff2j@wordpress.com","gender":"Male","money":"$7039.70","country":"China"},
{"id":93,"firstName":"Northrup","lastName":"Bartram","email":"nbartram2k@google.com.br","gender":"Male","money":"$8203.62","country":"China"},
{"id":94,"firstName":"Web","lastName":"Smedmore","email":"wsmedmore2l@purevolume.com","gender":"Male","money":"$6682.19","country":"United States"},
{"id":95,"firstName":"Farrel","lastName":"Donnan","email":"fdonnan2m@parallels.com","gender":"Male","money":"$1703.83","country":"Russia"},
{"id":96,"firstName":"Sharai","lastName":"Cowin","email":"scowin2n@sciencedirect.com","gender":"Female","money":"$4951.31","country":"China"},
{"id":97,"firstName":"Onfre","lastName":"Bonifazio","email":"obonifazio2o@blogs.com","gender":"Non-binary","money":"$396.47","country":"Indonesia"},
{"id":98,"firstName":"Mathew","lastName":"Siggens","email":"msiggens2p@e-recht24.de","gender":"Male","money":"$5751.96","country":"China"},
{"id":99,"firstName":"Matthaeus","lastName":"Paddell","email":"mpaddell2q@technorati.com","gender":"Male","money":"$330.37","country":"China"},
{"id":100,"firstName":"Lucilia","lastName":"Monketon","email":"lmonketon2r@furl.net","gender":"Female","money":"$4244.38","country":"Indonesia"}]

// Question 1
const emails = users.map((user) =>{
    return user.email
})
 console.log(emails);
// -----------------------------------------------------------------------------

// Question 2
const filterUsers = users.filter((user) =>{
    return user.country == 'Iran'
});
 const fullName = filterUsers.map((user) =>{
   let name = user.firstName + ' ' + user.lastName;
   return name
})
console.log(fullName);
// -----------------------------------------------------------------------------

// Question 3
const genderFilter = users.filter((user) =>{
    return user.gender !== 'Female' && user.gender !== 'Male'
})
const moneyUser = genderFilter.map((user) =>{
    let name = user.firstName + ' ' + user.lastName
    return {name , gender : user.gender , money : user.money}
})
console.log(moneyUser);
// -----------------------------------------------------------------------------

// Question 4
const userFilter = users.filter((user) =>{
    money  = user.money.replace("$","")
    money  = Number(money)
    return  user.country == 'United States' && money > 1500
})
const emailUsers = userFilter.map((user) =>{
    return user.email
})
console.log(emailUsers);
// -----------------------------------------------------------------------------
// Question 5     
//  to list users faqat 1 user ba country iran hastesh mn in filter ro baraye keshvar dgeii dar nazar gerftm k beshe sort kard :)
const countryFilter = users.filter((user) =>{
   return user.country == "United States"
});
const Money = countryFilter.map((user) =>{
    let money  = user.money.replace("$",'')
    return money
});
MoneySort = Money.sort((a,b) => b-a);
console.log(MoneySort)

// ---------------------------------------------------------------------------

// Question 6
const EmailLength = users.filter((user) =>user.email.length >30);
const user = EmailLength.map((user) => `${user.firstName} ${user.lastName}`);
console.log(user)
// --------------------------------------------------------------------------

// Question 7
const EmailEnds = users.filter((user) =>{
    let ends = user.email.endsWith('.edu')
    return ends
});
const userMoney = EmailEnds.map((user)=>{
    return {email: user.email , money: user.money}
})
console.log(userMoney)
// ----------------------------------------------------------------------------

// Question 8
const CountOfFemales = users.reduce((fix , user)=>{
    let female = user.gender === 'Female';
    return female + fix
    },0);

console.log(CountOfFemales)

// ---------------------------------------------------------------------------

// Question 9
const Male = users.filter((user)=>{
    return user.gender === 'Male'
})
const SumOfMoney = Male.reduce((fix , user)=>{
    let money =  Number(user.money.replace("$",''))
    return money + fix
},0)
console.log(SumOfMoney)
// ---------------------------------------------------------------------------

// Qusetion 10 
const countryfilter = users.filter((user)=>user.country === 'France')
const AvgOfMoney = countryfilter.reduce((fix , user)=>{
    let money =  Number(user.money.replace("$",'0'))
    return (money + fix)/countryFilter.length
},0)
console.log(AvgOfMoney)
// --------------------------------------------------------------------------------

// Question 11
const CountryCounts = users.reduce(function(obj, country){
    if (!obj[country.country]) {
        obj[country.country] = 1;
    } else {
        obj[country.country]++;
    }
    return obj;
}, {});
const GroupByCountry = users.reduce(function (obj, user) {
    obj[user.country] = obj[user.country] || [];
    obj[user.country].push(user);
    return obj;
}, Object.create(Object));

console.log(GroupByCountry);
// ------------------------------------------------------------------------
// Question 12
const GroupByGender = users.reduce(function (obj, user) {
    obj[user.gender] = obj[user.gender] || [];
    obj[user.gender].push(user);
    return obj;
}, Object.create(Object));

console.log(GroupByGender);


