import { Router } from "express";
import { CreateCategoryServices } from "../modules/cars/services/CreateCategoryServices";
import { categoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categoriesrepository = new categoriesRepository()


categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryServices = new CreateCategoryServices(categoriesrepository);
    createCategoryServices.execute({ name, description });
    return res.status(201).send();

}
);

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesrepository.list();

    return res.json(all);
});
export { categoriesRoutes };