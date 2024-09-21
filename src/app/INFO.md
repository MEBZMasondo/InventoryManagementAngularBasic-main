
# BASIC TABLE 

```html

<!-- Simpler Table -->
<div class="main" >
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Purchase Price</th>
            <th>Selling Price</th>
            <th>Quantity</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of products">
            <td>{{ product.productName }}</td>
            <td>{{ product.productDescription }}</td>
            <td>{{ product.productPurchasePrice }}</td>
            <td>{{ product.productSellingPrice }}</td>
            <td>{{ product.productQuantity }}</td>
            <td>{{ product.productActive == 1 ? 'Active' : 'Inactive' }}</td>
          </tr>
        </tbody>
      </table>   
</div>

```


```ts


  products?: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

```