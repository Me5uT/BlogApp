const API_URL = 'https://www.lenasoftware.com/api/v1/en/maestro/1';

// Fetch data by page number
export const fetchDataOnPage = (pageNumber: number) => {
  return fetch(`${API_URL}?page=${pageNumber}&count=10`);
};
