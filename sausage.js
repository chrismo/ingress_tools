function sendSausage(passcode) {
  console.log('Sending ' + passcode);
  document.getElementById('passcode').value = passcode;
  redeem();
}

function grindSausage() {
  var prefixes = ['3re5'];
  var keywords = ['xm', 'magic', 'magnes'];
  var suffixes = ['t9q8q', 't9q8g', 'x2q9y'];

  for (var p = 0; p < prefixes.length; p++) {
    for (var k = 0; k < keywords.length; k++) {
      for (var s = 0; s < keywords.length; s++) {
        var prefix = prefixes[p];
        var keyword = keywords[k];
        var suffix = suffixes[s];

        var passcode = prefix + keyword + suffix;
        sendSausage(passcode);
      }
    }
  }
}