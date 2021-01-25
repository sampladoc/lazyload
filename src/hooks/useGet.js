/* eslint-disable no-shadow */
import React from 'react';
import axios from 'axios';

import { BASE_URL } from '../config';

export function useGet(endpoint) {

  const [responseData, setResponseData] = React.useState({});
  const [response, setResponse] = React.useState({});
  React.useEffect(() => {
    console.log(`${BASE_URL}${endpoint}`)
    async function loopLoad(data) {
      var result = [];
      for (let p of data.data.results) {
        let info = await axios.get(p.url);
        result.push({ id: info.data.id, name: info.data.name, src: info.data.sprites.front_default, width:500, height: 500, alt: info.data.name});
      }
      return result
    }
    axios
      .get(`${BASE_URL}${endpoint}`)
      .then((res) => {
        loopLoad(res).then(result => {
          let newRes = {
            res: result,
            next: res.data.next
          }
          setResponse(newRes)
          setResponseData(res);
        })
      });
  }, [endpoint]);
  return response;
}
