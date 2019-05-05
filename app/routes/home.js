
module.exports = function (aplication)
{
    aplication.get('/', function (req, res)
    {
        aplication.app.controllers.homeController.homeform(aplication, req, res);
    })
};

