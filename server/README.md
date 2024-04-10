# Build and Run

### Locally

Create a `.env` file at the root of the server folder :

```
PGUSER=websandboxdbadmin
PGPASSWORD=xxxxxxxxx
PGDATABASE=postgres
PGHOST=websandboxdb.postgres.database.azure.com
PGPORT=5432
```

To install packages, go to the server fodler and run :

```
npm ci
```

Then to run locally, go to the server folder and run :

```
npm start
```

## Main packages used

- [express](https://expressjs.com/fr/)
