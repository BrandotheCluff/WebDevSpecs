const workout = [];
id = 0;

module.exports = {

    getBack: (req, res) => {
        res.status(200).send(workout)
        console.log(workout)
    }



}