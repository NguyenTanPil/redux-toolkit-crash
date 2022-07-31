import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import {
  calculateTotal,
  getCartItems,
  selectCart,
} from './features/cart/cartSlice';
import { selectModal } from './features/modal/modalSlice';

export default function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector(selectCart);
  const { isOpen } = useSelector(selectModal);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}
