const Pet = require("../models/petshop.model");

const getAllPets = (request, response) =>
{
    Pet.find().collation({locale:"en", strength: 2}).sort({type: 1})
        .then (
            (allPets) => response.json(allPets)
        )
        .catch ( 
            (error) => 
            {
                console.log(error);
                response.status(400).json(error);
            }
        );
}

const getPetById = (request, response) =>
{
    const {params} = request;

    Pet.findOne( {_id: params._id} )
        .then (
            (onePet) => response.json(onePet)
        )
        .catch (
            (error) => 
            {
                console.log(error);
                response.status(400).json(error);
            }
        );
}

const createNewPet = (request, response) =>
{
    const {body} = request;

    Pet.create(body)
        .then (
            (newPet) => response.json(newPet)
        )
        .catch (
            (error) => 
            {
                console.log(error);
                response.status(400).json(error);
            }
        );
}

const updatePet = (request, response) =>
{
    Pet.findOneAndUpdate( {_id: request.params._id}, 
        request.body,
        {
            new: true,
            runValidators: true
        })
        .then (
            (updatedPets) => response.json(updatedPets)
        )
        .catch(
            (error) => 
            {
                console.log(error);
                response.status(400).json(error);
            }
        );
}   

const deletePet = (request, response) =>
{
    Pet.deleteOne( {_id: request.params._id} )
        .then (
            (deletedPet) => response.json(deletedPet)
        )
        .catch (
            (error) => 
            {
                console.log(error);
                response.status(400).json(error);

            }
        );
}

module.exports = 
{
    getAllPets,
    getPetById,
    createNewPet,
    updatePet,
    deletePet
}