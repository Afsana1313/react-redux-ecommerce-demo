import axios from "axios";
export const getData = () => {
  let arr;
  axios.get(`${process.env.REACT_APP_BASE_URL}`).then((res) => {
    //console.log(res.data);
    arr = res.data
      ?.filter((i: any) => i.rating !== null)
      .filter((i: any) => i.price !== "");
  });
  return arr;
};
