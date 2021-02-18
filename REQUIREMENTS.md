# API Requirements
Company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page.

## API Endpoints
API baseurl - `http://localhost:{PORT e.g 8000}/api/v1`

#### Products
- Index: GET `baseurl` + `/products` 
- Show (args: product id): GET `baseurl` + `/products/:productid`
- Create (args: Product)[token required]: POST `baseurl` + `/products` 
- Products by category (args: product category): GET `baseurl` + `/products/:categoryid/category`

#### Users
- Index [token required]: GET `baseurl` + `/users`
- Show (args: id)[token required]: GET `baseurl` + `/users/:userid`
- Create (args: User)[token required]: POST `baseurl` + `/users`
- Create user for initial app setup(args: User): POST `baseurl` + `/users/setup` 

#### Orders
- Current Order by user (args: user id)[token required]: GET `baseurl` + `/orders/:user_id/`
- Completed Orders by user (args: user id)[token required]: GET `baseurl` + `/users/:user_id/completed`
- User create order (args: user id)[token required]: POST `baseurl` + `/orders/:user_id`

## Data Shapes
#### Product
NB - A product can belong to many categories as seen in the belongs to many relationship represented by the `categoryid` foreign key on the products table.

-  id: PK
- name
- price
- categoryid: FK

#### Category
-  id: PK
- name
- notes

#### User
- id: PK
- firstName
- lastName
- password
- email

#### Orders
N.B - A user can have many orders in this has many relationship hence the foreign key `user_id` on the orders table.

- id: PK
- user_id: FK
- order_status (1: active, 2: complete)

#### OrderProducts
N.B - orderproducts is a join table for orders and products in this many to many relationship. An order can contain many products, and a product can belong to many orders. The quantity of each product is also represented on the join table.

- user_id: FK
- orderid: FK
- productid: FK
- productqty

All entities are correctly represented in each model present in the `./migrations/` folder.
See `./schema` for more information and diagrams. 