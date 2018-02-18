// Create an object literal for a bookstor object that can calculate the invertory
// value and can also find books values based off title.

// Key and value that are the same such as inventory: inventory, you can delete
// the colon and second inventory.

function createBookstore(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry potter', price: 10},
  { title: 'Harry potter part 2', price: 12},
]

const bookshop = createBookstore(inventory);
bookshop.inventoryValue();
bookshop.priceForTitle('Harry potter');
