import React from "react";
import { Modal, Button, Table } from "react-bootstrap";


const Cart = ({ cartItems, handleUpdateQuantity, totalPrice, handleRemoveFromCart, show, handleClose, props }) => {
    return (
        <Modal show={show} onHide={handleClose} size="xl" backdrop="static" scrollable centered fullscreen="lg-down">
            <Modal.Header closeButton>
                <Modal.Title className="text-success fs-2">Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length === 0 ? (
                    <p className="text-center fs-5 text-dark">Your cart is empty</p>
                ) : (
                    <div className="table-responsive">
                        <Table hover className="align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Food</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.title}>
                                        <td>{item.title}</td>
                                        <td>{item.salePrice.toLocaleString()}$</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleUpdateQuantity(item.title, item.quantity - 1)
                                                    }
                                                >
                                                    <i className="fas fa-minus"></i>
                                                </Button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleUpdateQuantity(item.title, item.quantity + 1)
                                                    }
                                                >
                                                    <i className="fas fa-plus"></i>
                                                </Button>
                                            </div>
                                        </td>
                                        <td>{(item.salePrice * item.quantity).toLocaleString()}$</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleRemoveFromCart(item.title)}
                                            >
                                                <i className="fas fa-trash-alt"></i> Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer className="border-top-0 pt-0 flex-wrap gap-2">
                <h5 className="mb-3 w-100 text-end border-top pt-3 fs-4 text-danger">
                    Total Price: {totalPrice.toLocaleString()}$
                </h5>
                <div className="w-100 d-flex flex-column flex-sm-row justify-content-between gap-2">
                    <Button
                        variant="outline-dark"
                        className="w-100 w-sm-auto px-4 py-2"
                        onClick={handleClose}
                    >
                        Continue to choose food
                    </Button>
                    <Button
                        variant="primary"
                        className="w-100 w-sm-auto px-5 py-2"
                        type="submit"
                        form="cart-form"
                    >
                        Pay
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default Cart;
