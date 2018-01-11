const items = [{ id: 1, name: 'product 1' }, { id: 2, name: 'product 2' }, { id: 3, name: 'product 3' }, { id: 4, name: 'product 4' }, { id: 5, name: 'product 5' }];

exports.index = (req, res) => res.render('index', { title: 'Mi Reto' })

exports.getProducts = (req, res) => res.render('products', { title: 'List of products', items: items })

exports.newProduct = (req, res) => {
  let { newItem } = req.body;
  console.log(newItem);
  items.push({ id: items.length + 1, name: newItem });
  res.redirect('/products');
}
