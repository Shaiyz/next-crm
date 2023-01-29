// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export const post = async (body) => {
  try {
    const { data } = await axios.post("http://localhost:8000/api/v1/lead", {
      lead: body,
    });
    return response.data.data;
    console.log(data);
    debugger;
  } catch (err) {
    console.log(err.message);
  }
};

export const get = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/v1/lead`);

    return response.data.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const put = async (body, id) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/v1/lead/${id}`,
      { lead: body }
    );
    console.log(response);
    return response.data.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const del = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/api/v1/lead/${id}`);
  } catch (err) {
    console.log(err.message);
  }
};
