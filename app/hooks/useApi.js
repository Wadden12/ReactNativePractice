import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // use the rest operator to take arguements  const request = async (...args) => {
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};
