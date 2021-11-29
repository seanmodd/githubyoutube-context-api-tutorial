import { CartState } from '../Context';
import SingleProduct from './SingleProduct';
import { Heading } from '../CRUD/components/Heading';
import { UserList } from '../CRUD/components/UserList';

const Home = () => {
  const { products } = CartState();

  return (
    <div style={{ textAlign: 'center' }}>
      <Heading />
      <UserList />
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
