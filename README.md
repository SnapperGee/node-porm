# Porm

An application of express routes mapped to a product database.

## Routes

### /api/tags

This route is used to get all tags as well as to create, update, or delete a tag.

A get request to this route will return all tags. A get request with a route parameter specifying a tag id will retrieve
the tag with that id.

A post request to this route will create a new tag.

A put and delete request to this route with a route parameter specifying the tag id will update or delete the tag with
that id respectively.

Refer to the [tag model](#tag) for its properties.

### /api/categories

This route is used to get all categories as well as to create, update, or delete a category.

A get request to this route will return all categories. A get request with a route parameter specifying a category id
will retrieve the category with that id.

A post request to this route will create a new category.

A put and delete request to this route with a route parameter specifying the category id will update or delete the
the category with that id respectively.

Refer to the [category model](#category) for its properties.

### /api/products

This route is used to get all products as well as to create, update, or delete a product.

A get request to this route will return all products. A get request with a route parameter specifying a product id will
retrieve the product with that id.

A post request to this route will create a new product.

A put and delete request to this route with a route parameter specifying the product id will update or delete the product
with that id respectively.

Refer to the [product model](#product) for its properties.

## Model/Database Table Structure

### Tag

- `id`

  - INTEGER
  - PK
  - AUTO INCREMENT

- `tag_name`

  - STRING

### Category

- `id`

  - INTEGER
  - PK
  - AUTO INCREMENT

- `category_name`

  - STRING
  - NOT NULL

### Product

- `id`

  - INTEGER
  - PK
  - AUTO INCREMENT

- `product_name`

  - STRING
  - NOT NULL

- `price`

  - DECIMAL
  - NOT NULL

- `stock`

  - INTEGER
  - NOT NULL
  - DEFAULT `10`

### ProductTag

- `id`

  - INTEGER
  - PK
  - AUTO INCREMENT

- `product_id`

  - INTEGER
  - FK (Product.id)

- `tag_id`

  - INTEGER
  - FK (Tag.id)

## Demo

A video demo showcasing this application's functionality can be found [HERE](.).

## Package Utilities

This package contains the `db` and `seeds` directories. The `db` directory contains the SQL to drop and then recreate
the database. The `seeds` directory contains scripts to seed the database with data. Both of these are destructive
operations and result in the loss of all data in the database. Use if a fresh database state is needed.

The seed scripts can be run via:

```bash
npm run seed
```
