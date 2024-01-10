// Array of proudcts
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

// Mylist component
function MyList(){
    // Mapping listItems
    const listItems = products.map(product =>
        <li
          key={product.id}
          style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
          }}
        >
          {product.title}
        </li>
      );
    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    );

};

export default MyList;