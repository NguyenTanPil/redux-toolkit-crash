const url = 'http://localhost:4000/cartItems';

export const getAllCartItems = async () => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    throw new Error('Fetch error');
  }
};
