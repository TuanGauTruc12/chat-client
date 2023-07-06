import axios from "axios";

export const addUser = async (data) => {
  try {
    await axios.post(`${process.env.REACT_APP_API}/user`, data);
  } catch (error) {
    console.log("Error while address API", error.message);
  }
};

export const getUsers = async () => {
  try {
    const reponse = await axios.get(`${process.env.REACT_APP_API}/users`);
    return reponse.data;
  } catch (error) {
    console.log("Error while getUsers API", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${process.env.REACT_APP_API}/conversation/add`, data);
  } catch (error) {
    console.log("Error while setConversation API", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_API}/conversation/get`,
      data
    );
    
    return response.data;
  } catch (error) {
    console.log("Error while getConversation API", error.message);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${process.env.REACT_APP_API}/message`, data);
  } catch (error) {
    console.log("Error while newMessage API", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    const mesages = await axios.get(`${process.env.REACT_APP_API}/message/`+ id);
    return mesages.data;
  } catch (error) {
    console.log("Error while getMessages API", error.message);
  }
};

export const uploadFile = async(data)=>{
  try {
    return axios.post(`${process.env.REACT_APP_API}/file/upload`, data);
  } catch (error) {
    console.log("Error while uploadFile API", error.message);
  }
}