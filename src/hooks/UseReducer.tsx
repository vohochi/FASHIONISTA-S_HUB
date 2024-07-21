import { useEffect, useReducer } from 'react';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'fetchAPI/request':
      return { ...state, isLoading: action.isLoading };
    case 'fetchAPI/success':
    case 'fetchAPI/error':
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
};

export const useFetch = (
  url: string,
  method: 'GET' | 'POST' | 'PUT' = 'GET',
  body?: any
) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    (async () => {
      dispatch({
        type: 'fetchAPI/request',
        isLoading: true,
      });
      try {
        let res;
        if (method === 'GET') {
          res = await fetch(`http://localhost:3000/api/v1/${url}`);
        } else {
          res = await fetch(`http://localhost:3000/api/v1/${url}`, {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });
        }
        if (res.ok) {
          const data = await res.json();
          dispatch({
            type: 'fetchAPI/success',
            isLoading: false,
            error: null,
            data,
          });
        } else {
          dispatch({
            type: 'fetchAPI/error',
            isLoading: false,
            error: new Error(`Request failed with status ${res.status}`),
            data: [],
          });
        }
      } catch (err) {
        dispatch({
          type: 'fetchAPI/error',
          isLoading: false,
          error: err,
          data: [],
        });
      }
    })();
  }, [url, method, body]);

  return { ...state };
};
