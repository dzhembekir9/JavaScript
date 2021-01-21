function getSecret(file, secretPassword) {

    superSecretFile.opened = superSecretFile.opened + 1;
    
    if (secretPassword == superSecretFile.password) {
        return superSecretFile.contents;
    }
    else {
        return "Invalid password! No secret for you.";
    }
}

function setSecret(file, secretPassword, secret) {

    if (secretPassword == secret.password) {
        secret.opened = 0;
        secret.contents = secret;
    }

}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, superSecretFile.password);
console.log(secret);
setSecret(superSecretFile, superSecretFile.password, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, superSecretFile.password);
console.log(secret);