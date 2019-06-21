async function post(url, bodyData) {
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
  const jsonRes = await data.json();
  return jsonRes;
}

async function get(url) {
  const data = await fetch(url);
  const jsonRes = await data.json();
  return jsonRes;
}

async function put(url) {
  const data = await fetch(url, {
    method: 'put',
  });
}

export { post, get, put };
