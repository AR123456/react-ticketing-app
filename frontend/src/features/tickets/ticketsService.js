// interact with API, hook up to form
import axios from "axios";

const API_URL = "/api/tickets/";

// create ticket
const createTicket = async (ticketData, token) => {
  const config = {
    // token goes in the headers
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // make req get response
  const response = await axios.post(API_URL, ticketData, config);
  return response.data;
};
// get user tickets
const getTickets = async (token) => {
  const config = {
    // token goes in the headers
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // make req get response
  const response = await axios.get(API_URL, config);
  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
};

export default ticketService;
