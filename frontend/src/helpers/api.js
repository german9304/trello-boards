async function post(url, options) {
  const data = await fetch(url, {});
}

async function get(url) {
  const data = await fetch(url);
}

async function put(url) {
  const data = await fetch(url, {
    method: 'put',
  });
}

export { post, get, put };
