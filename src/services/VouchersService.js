import api from "../config/api";

class VouchersService {
  async getAll() {
    try {
      const { data } = await api.get("/vouchers.json");
      if (data) {
        return data.vouchers;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default new VouchersService();
