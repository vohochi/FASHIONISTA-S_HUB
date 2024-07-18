const http = 'http://127.0.0.1:3000/api';
export const registerUser = async (userData: {
  fullName: string;
  email: string;
  password: string;
  password2: string;
}) => {
  try {
    const response = await fetch(`${http}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      return { ok: true, data };
    } else {
      const error = await response.json();
      return { ok: false, error };
    }
  } catch (error) {
    console.error('Lỗi gọi API:', error);
    throw error;
  }
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${http}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      return { ok: true, data };
    } else {
      const error = await response.json();
      return { ok: false, error };
    }
  } catch (error) {
    console.error('Lỗi gọi API:', error);
    throw error;
  }
};
export const getAllUsers = async () => {
  try {
    const response = await fetch(`${http}/users`);

    if (response.ok) {
      const data = await response.json();
      return { ok: true, data };
    } else {
      const error = await response.json();
      return { ok: false, error };
    }
  } catch (error) {
    console.error('Lỗi gọi API:', error);
    throw error;
  }
};
