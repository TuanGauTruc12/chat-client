import axios from "axios";

export const addUser = async (data) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_API}/user`,
      data
    );
  } catch (error) {
    console.log("Error while address API", error.message);
  }
};

export const getUsers = async() => {
    try {
        const reponse = await axios.get(`${process.env.REACT_APP_API}/users`);
        return reponse.data;
    } catch (error) {
        console.log("Error while getUsers API", error.message);
    }
};

export const setConversation = async(data) => {
  try {
    await axios.post(`${process.env.REACT_APP_API}/conversation`,data);
  } catch (error) {
    console.log("Error while setConversation API", error.message);
  }
}