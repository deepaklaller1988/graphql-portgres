# GraphQL TypeORM Demo

Application contains graphql server and is integrated with TypeORM. Server is set up to run on port 8050.

## Requirements
* TypeScript (min version 3.x.x)
* NodeJS (min version 12.16.x)
* NPM (min version 6.x.x)

## How to run
To run the application, first you need to install the packages:
```bash
npm install
```

Then you can run using command:
```bash
npm start
```

## Example GraphQL queries and mutations
* Get all users
```graphql
query {
  users {
    id
  	color
    name
 rating
  }
}
``

* Create user
```graphql
mutation {
  createUser(
    data: {
      color: "Jacek",
      name: "Papuga",
      rating: "5",
    }
  ) {
    id
    color
   name
    rating
  }
}

```

