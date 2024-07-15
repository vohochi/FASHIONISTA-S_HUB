const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  try {
    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    formData.append('confirmPassword', userData.confirmPassword);

    const response = await fetch('/api/register', {
      method: 'POST',
      body: formData,
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

export default { registerUser };
