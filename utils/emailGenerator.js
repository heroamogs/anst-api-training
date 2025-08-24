function generateRandomEmail(){
    const emailList = [
        "example1@anst.com", // index 0
         "example2@anst.com", // index 1
         "example3@anst.com", // index 2
         "example4@anst.com", // index 3
         "example5@anst.com", // index 4
         "example6@anst.com" // index 5
    ];

    const randomIndex = Math.floor(Math.random() * emailList.length)
    return emailList[randomIndex]
}

module.exports = {generateRandomEmail}