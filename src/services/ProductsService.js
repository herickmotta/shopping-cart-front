import api from "../config/api";

class ProductsService {
  async getAll() {
    try {
      const { data } = await api.get("/products.json");
      if (data) {
        return data.products;
      }
      return null;
    } catch (err) {
      return err;
    }
  }
}

export default new ProductsService();
