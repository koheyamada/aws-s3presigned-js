/*
 =============================
 Copyright © 2017 kohei YAMADA
 =============================
*/

function awsConfig(accessKeyId, secretAccessKey, region){
  AWS.config.update({
      "accessKeyId": "xxxxxxxxxxx",
      "secretAccessKey":"xxxxxxxxxxxxxxxxxxxxx",
      "region": "ap-northeast-1"
  });
}

function s3GetUrl(bucketname, objectname, expire){
  awsConfig();
  var s3 = new AWS.S3();
  var params = {Bucket: bucketname, Key: objectname, Expires: expire};
  var url = s3.getSignedUrl('getObject', params);
  alert(url);
}

function s3ListObject(bucketname){
  awsConfig();
  var s3 = new AWS.S3();
  var params = {Bucket: bucketname};
  var list = s3.listObjects(params, function (err, data) {
    if (err) {
      document.getElementById('status').innerHTML = 'Could not load objects from S3';
    } else {
　　   document.getElementById('status').innerHTML =　'Loaded ' + data.Contents.length + ' items from ' ;
      for (var i = 0; i < data.Contents.length; i++) {
        document.getElementById('objects').innerHTML += '<li>' + data.Contents[i].Key + '</li>';
      }
    }
  });
}

function s3ListObject2(bucketname){
  awsConfig();
  var s3 = new AWS.S3();
  var params = {Bucket: 'kohei-no-bucket'};
  var list = s3.listObjects(params, function(err, data) {
    if (err) {
      document.write(err, err.stack);
    } else {
      //console.log(data.Contents[0].Key);
      document.write(data);
    }
  });
}

function s3params(bucketname, objectname, expire){
  var s3 = new AWS.S3();
  var params = {Bucket: bucketname, Key: objectname, Expires: expire};
}

function s3wrap(bucketname, objectname, expire){
  awsconfig();
  var s3 = new AWS.S3();
  var params = {Bucket: bucketname, Key: objectname, Expires: expire};  var url = s3.getSignedUrl('getObject', params);
  document.write(url);
}
