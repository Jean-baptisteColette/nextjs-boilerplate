import { asController } from "../../backend/middlewares";
import { User } from "../../modules/user/definitions";

export const createDataController = () => ({
  GET: async (): Promise<User> => {
    return {
      firstName: "Test",
      lastName: "User",
    };
  },
});

export default asController(createDataController());
