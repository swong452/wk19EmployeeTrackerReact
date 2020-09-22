import axios from "axios";
export default {
    // Gets all users using axios HTTP cliet GET call
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=50&nat=uk");
    }
};