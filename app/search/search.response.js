/* eslint-disable no-underscore-dangle */
const dataItem = (id, {
  name, description, images, price, categories, tags,
}, link) => {
  const href = `${link}/${id}`;

  return {
    id,
    name,
    description,
    images,
    price,
    categories,
    tags,
    href,
  };
};

const mountData = (data, hrefData) => {
  if (!data) return [];

  return data.map(item => dataItem(item._id,
    { ...item._source },
    hrefData));
};

const mountSearchRespponse = (data, hrefData, textSearch, offset, limit, total) => {
  let currentPage = 1;

  if (offset > 0) {
    currentPage = offset / limit;
  }

  let url = `${hrefData}?`;

  if (textSearch) url = `${url}q=${textSearch}&`;

  url = `${url}limit=${limit}&page=`;

  const response = {
    count: total,
    currentPage: `${url}${currentPage}`,
    data: mountData(data, hrefData),
  };

  if (total > (offset + limit)) response.nextPage = `${url}${currentPage + 1}`;

  if (currentPage > 1) response.previousPage = `${url}${currentPage - 1}`;

  return response;
};

module.exports = { mountSearchRespponse };
