var friendsArray =[
    {
        name: "Steven Henke",
        photo: "data:image/jpeg;base64,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",
        scores:[1,2,3,4,5,4,3,2,1,2]
        
    }
];





module.exports = friendsArray;