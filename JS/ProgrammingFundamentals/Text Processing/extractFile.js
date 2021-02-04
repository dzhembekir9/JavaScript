function solve(str) {
    
    let fullFile = str.substring(str.lastIndexOf('\\') + 1);

    let fileName = fullFile.substring(0, fullFile.lastIndexOf('.'));
    let fileExt = fullFile.substring(fullFile.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);

}

solve('C:\\Internal\\training-internal\\Template.pptx');