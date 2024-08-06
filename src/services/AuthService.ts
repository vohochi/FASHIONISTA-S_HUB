const http = 'http://127.0.0.1:3000/api/v1/users';
export const registerUser = async (userData: {
  fullName: string;
  email: string;
  password: string;
  password2: string;
}) => {
  try {
    const response = await fetch(`${http}/register`, {
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
    const response = await fetch(`${http}/login`, {
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
// forget pass

export const forgetUser = async (email: string) => {
  try {
    const response = await fetch(`${http}/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
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

// reset pass
export const resetPasswordUser = async (userData: {
  token: string;
  newPassword: string;
}) => {
  try {
    const response = await fetch(`${http}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
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

// profile
export const updateProfile = async (
  email: string,
  fullName: string,
  phone: string,
  address: string,
  image: File | null
) => {
  const requestData = {
    email,
    fullName,
    phone,
    address,
    img: image || null,
  };

  try {
    const response = await fetch(`${http}/update-profile/${email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
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
