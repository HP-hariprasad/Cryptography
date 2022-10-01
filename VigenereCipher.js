const encrypt = (plainMessage, key) => {
  if (plainMessage == "" || key == "") {
    console.log("Please type both secret message and key");
  } else {
    var cypher = "";
    for (var i = 0, j = 0; i < plainMessage.length; i++) {
      var currentLetter = plainMessage[i];
      if (isUpperCaseText(currentLetter)) {
        var upperLetter =
          (currentLetter.charCodeAt() -
            65 +
            (key[j % key.length].toUpperCase().charCodeAt() - 65)) %
          26;
        cypher += String.fromCharCode(upperLetter + 65);
        j++;
      } else if (isLowerCaseText(currentLetter)) {
        var lowerLetter =
          (currentLetter.charCodeAt() -
            97 +
            (key[j % key.length].toLowerCase().charCodeAt() - 97)) %
          26;
        cypher += String.fromCharCode(lowerLetter + 97);
        j++;
      } else {
        cypher += currentLetter;
      }
    }
    return cypher;
  }
};

const isUpperCaseText = (data) => {
  var text = data.charCodeAt();
  if (text >= 65 && text <= 90) {
    return true;
  } else {
    return false;
  }
};

const isLowerCaseText = (data) => {
  var text = data.charCodeAt();
  if (text >= 97 && text <= 122) {
    return true;
  } else {
    return false;
  }
};

console.log(encrypt("Hello I am Hariprasad from India", "Hari"));
