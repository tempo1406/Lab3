import React from "react";
import MenuItem from "./MenuItem";
import { Container, Row } from "react-bootstrap";

const Menu = ({ handleAddToCart }) => {
    return (
        <Container className="mt-5">
            <h2 className="mb-4">Our Menu</h2>
            <Row>
                <MenuItem imgSrc="./assets/menu1.jpg" title="Margherita Pizza" price="$40.00" salePrice="$24.00" handleAddToCart={handleAddToCart} />
                <MenuItem imgSrc="./assets/menu2.jpg" title="Mushroom Pizza" price="$25.00" handleAddToCart={handleAddToCart} />
                <MenuItem imgSrc="./assets/menu3.jpg" title="Hawaiian Pizza" price="$30.00" handleAddToCart={handleAddToCart} />
                <MenuItem imgSrc="./assets/menu4.jpg" title="Pesto Pizza" price="$50.00" salePrice="$30.00" handleAddToCart={handleAddToCart} />
            </Row>
        </Container>
    );
};

export default Menu;
