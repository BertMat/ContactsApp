## How to run

In the project directory `contacts-app-ui`, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


In the project directory `ContactsAppAPI/ContactsAppAPI.API`, you can run:

### `dotnet run` - to run the API

Open [https://localhost:7008/swagger](https://localhost:7008/swagger) to view swagger documentation in your browser.
After the first setup - database will be created automatically.

In the API project Onion Architecture is used with separate sections and mappings.

## Main Stack
- .NET 6, Swagger, EntityFrameworkCore 6, Sqlite, AutoMapper, xUnit, Moq, FluetAssertions, React.Js, Material UI
## Functionalities

### `Add new contact`

#### You can add new contact with the button below the table `Add new contact`. After you click the button the modal should show. There you have to give required informations about contact. After submiting, data should be added to the table.

### `Edit contact`

#### You can edit existing contacts as well as new ones - you created before without saving changes. To do it, you just must click the `Edit` button in the exact row you want to edit. After you click the button the modal should show. There you have to give required informations about contact. After submiting, data should be edited in the table.

### `Delete contact`

#### You can delete existing contacts as well as new ones - you created before without saving changes. To do it, you just must click the `Delete` button in the exact row you want to delete. After that, row should dissapear.

### `Save changes`

#### You can save changes you have made earlier. You don't need to save changes after every action you are doing in the table. Only one click should suffice to send varoius http requests.