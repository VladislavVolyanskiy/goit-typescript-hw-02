import axios from "axios";

const ACCESS_KEY = "ggac5C06d047XFjI_XHONoWyxVMxiNfRmmHtci-gWxc";
axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function getImages(searchImage: string, page: number) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchImage,
      page,
      per_page: 18,
    },
  });
  return response.data;
}
