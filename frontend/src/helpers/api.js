async function post(url, options) {
  const data = await fetch(url, {});
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
