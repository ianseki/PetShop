const PetController = require("../controllers/petshop.controller");

module.exports = (app) => {
    app.get('/api/pets', PetController.getAllPets);
    app.post('/api/pets', PetController.createNewPet);
    app.get('/api/pets/:_id', PetController.getPetById);
    app.put("/api/pets/:_id", PetController.updatePet);
    app.delete("/api/pets/:_id", PetController.deletePet);
}