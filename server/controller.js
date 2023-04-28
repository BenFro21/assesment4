module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        // db of fortunes
        fortunes = [
            'A beautiful, smart, and loving person will be coming into your life.',
            'A dubious friend may be an enemy in camouflage.',
            'A faithful friend is a strong defense.',
            'A feather in the hand is better than a bird in the air.',
            'A fresh start will put you on your way.',
            'A friend asks only for your time not your money.'
        ]
        // random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)
    },

    askQuestion: (req,res) => {
        // setting the responses array to handle a random response 
        let responses = ['today is your lucky day', 'yes', 'no', 'Better luck tomororw', 'go ask your mother', 'I can not see your future']
        let randomIndex = Math.floor(Math.random() * responses.length);
        let randomResponse = responses[randomIndex];
        //returning the question the user sends with a random response 
        res.status(200).send(`The answer to ${req.body.question}  is difficult to see but the spirts tell me: ${randomResponse}`)
    },

    updateP: (req, res) => {
        console.log(req.body.ptag)
        res.status(200).send(req.body.ptag)
    },

    deleteMe: (req, res) => {
        console.log('delete hit')
        res.status(200).alert('item deleted')
    }

}