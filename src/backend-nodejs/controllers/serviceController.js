const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
    create: async (req, res) => {
        try {
            // Verificação básica dos dados de entrada
            const service = { 
                 name: req.body.name,
                 date: req.body.date,
                 localization: req.body.localization,
                 description: req.body.description,
                 done: req.body.done,
                 avaliation: req.body.avaliation,
                 };
                 const response = await ServiceModel.create(service);
                 res.status(201).json({response, msg: "Diaria criada com sucesso"});
                } catch (error) {
                    console.log(error);
             }
         
     },
     getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();

            res.json(services);

        } catch (error) {
            console.log(error);
        }
     },
     get: async(req, res) => {
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id);

            if(!service) {
                res.status(404).json({msg: "Diaria Não encontrada!"});
                    return;
            }

            res.json(service);
         
        } catch (error) {
           console.log(error);
        }
     },
     delete: async(req, res) => {
        try {
            const id = req.params.id

            const service = await ServiceModel.findById(id);
            if(!service) {
                res.status(404).json({msg: "Diaria Não encontrada!"});
                    return;
            }
              const deletedService =  await ServiceModel.findByIdAndDelete(id)

              res.status(200).json({deletedService, msg: "Diaria excluida com sucesso!"});

        } catch (error) {
            console.log(error);
        }

     },
     update: async (req,res) => {

        const id = req.params.id;
        const service = { 
            name: req.body.name,
            date: req.body.date,
            localization: req.body.localization,
            description: req.body.description,
            done: req.body.done,
            avaliation: req.body.avaliation,
            };

            const updateService = await ServiceModel.findByIdAndUpdate(id, service);

            if(!updateService) {
                res.status(404).json({msg: "Diaria Não encontrada!"});
                    return;
            }
    res.status(200).json({service, msg: "Diaria atualizada com sucesso!"});

     },
};

module.exports = serviceController;
