const http = 'http://127.0.0.1:3000/api/v1';
export const orderCreate = async (orderData) => {
  console.log(orderData);
  try {
    const response = await fetch(`${http}/orders/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
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

export const orderAll = async () => {
  try {
    const response = await fetch(`${http}/orders`);

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

export const orderByEmail = async (email: string) => {
  try {
    const response = await fetch(`${http}/orders/email/${email}`);

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
//momo method

export const orderPayment = async () => {
  try {
    const response = await fetch(`${http}/payment`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(orderData),
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
