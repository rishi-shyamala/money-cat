import System.IO;
function Start (text, name, type) {
   sw = new StreamWriter("TestFile.txt")
   var vals = JSON(text).rows;
   for (var key in vals){
      sw.WriteLine(vals[key].data)
   }
}
function PrintJson() {
  var BigParserAccountEmail = "2019chartzel@tjhsst.edu"
  var BigParserAccountPassword = "F)0lish99"
  var endpoint = "https://www.bigparser.com/APIServices/api/common/login"
var options = JSON.stringify({
  "emailId": BigParserAccountEmail,
  "password": BigParserAccountPassword,
  "loggedIn": true
})

$.ajax({
url: endpoint,
headers: {
  'Accept':'application/json',
  'Content-Type':'application/json'
},
method: 'POST',
dataType: 'json',
data: options,
success: function(data){
  endpoint = "https://www.bigparser.com/APIServices/api/query/table?endIndex=50&startIndex=0"
  options = JSON.stringify({
      "gridId": "58d7653e478af70572b5f7e3",
      "selectColumnsStoreName": [],
      "keywords": [],
      "rowCount": 50,
      "tags": [],
      "viewId": null,
      "sortKeys": []
  })

  headers = {
      'authId':data.authId,
      'Accept':'application/json',
      'Content-Type':'application/json'
  }

  $.ajax({
      url: endpoint,
      headers: headers,
      method: 'POST',
      dataType: 'json',
      data: options,
      success: function(data){
        var newname = /*console.log('succes: '+ */data.rows[0].data[0];//);
        Start(newname, 'test.txt', 'text/plain');
      }
  });
}
});

}
