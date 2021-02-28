## Project Structure:
**PostgreSQL** , **MongoDB**  and **CSV** - these 2  databases and 1 csv file are used in this project.

## Plan:
- Make separate modules for making bunch of vulnerable/non-vulnerable functions so that we don't get merge conflicts.
- Firstly we will build vulnerable functions for SQLI attack ,then for No-SQLI attack and so on.




## Project Installation

- To install all necessary packages that are used in this project, run the following command:

```
$ npm install  
```

- To start the local server ,run the following command:

```
$ npm start   
```
Your server should be available at  **localhost:5000** .... :)

## API Documentation:
##### Contact API:

1) Add new contact information the database:
```
 POST /contactAPI/storeUserContactData
```
```
Request Json Object:
        
        username(string): username of the contact
        email(string): email of contact
        subject(string): subject of contact
        message(string): message of contact
        num(Number): it denotes id of the database(1==postgresql , 2==mongodb)

Response Json Object:
        _id(ObjectId): unique id of the  contact user
        username(string): username of the contact
        email(string): email of contact
        subject(string): subject of contact
        message(string): message of contact
```

2) Get all contact information:
```
GET  /contactAPI/getAllUserContactData/(Number:num)
```
*num* denotes id of the database(1==postgresql , 2==mongodb)
 ```

Response list of Json Object:
        _id(ObjectId): unique id of the  contact user
        username(string): username of the contact
        email(string): email of contact
        subject(string): subject of contact
        message(string): message of contact

```

##### Book API:

1) Add new book to the database and excel:
```
 POST /bookAPI/addNewBookToMongo
```
```
Request Json Object:
        title(string): Title of the book
        writer(string): Author of the book
        category(string): Category of the book
        price(string): Price of the book

Response Json Object:
        _id(ObjectId): Book ID
        title(string): Title of the book
        writer(string): Author of the book
        category(string): Category of the book
        price(string): Price of the book

```
2) Get all books from the database:
```
GET  /bookAPI/allBooksFromMongo
```
```
Response list of Json objects:
        _id(ObjectId): Book ID
        title(string): Title of the book
        writer(string): Author of the book
        category(string): Category of the book
        price(string): Price of the book


```
3) Add updated Excel rows to the database:
```
POST  /bookAPI/addExcelData
```
```
Response list of Json objects:
        _id(ObjectId): Book ID
        title(string): Title of the book
        writer(string): Author of the book
        category(string): Category of the book
        price(string): Price of the book


```

## References:
- [Elephant SQL website for hosting postgresql database](https://api.elephantsql.com/console/3f6ad4f0-8f78-49d4-9ff7-651a1d885eba/details)
- [Blog for postgresql with nodejs](https://node-postgres.com/features/connecting)
