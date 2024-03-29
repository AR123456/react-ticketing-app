import axios from "axios";

const API_URL = "/api/tickets/";

// get ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    // token goes in the headers
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // make req get response
  const response = await axios.get(API_URL + ticketId + "/notes", config);
  return response.data;
};
// create ticket notes
const createNote = async (noteText, ticketId, token) => {
  const config = {
    // token goes in the headers
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // make req get response
  const response = await axios.post(
    API_URL + ticketId + "/notes",
    { text: noteText },
    config
  );
  return response.data;
};

const noteService = {
  getNotes,
  createNote,
};
export default noteService;
