# Falarya Brawl

Falarya Brawl main game application.

## The Project

This project was born with the proposition of being a practical and solid way to practice computer network administration concepts, wich has for its objective to bring a comprehension of subjects such as programming languages and algorithms; computer network technologies and protocols; general knowledge about computer functionalities.

The central idea of the project is built around the development of a game web application using programming techniques and communication technologies,then hosting it on a infrastructure provider of the cloud using a web-server.

## Technologies

The application is structured on a client-server architecture, which is defined by a front-end (client/browser) and back-end (server/services) division, where the front-end is responsible for displaying the client view and controls, and the back-end is responsible for processing and stores the game data, as for the control of multiple client sessions.

The project code structure runs in using a single programming language on both frontend and backend, for that the Javascript language was chosen since it can be used for the various libraries on the frontend and can be used with NodeJS on the backend.

In order to establish a solid communication flow between the client and the server, the application is structured with a collection of restful API endpoints for the general game data and content, and a Web Socket communication for the game session data.

#### Front-end

- Main Framework: Phaser3;
- Communication: SocketIO-client(WebSocket);

#### Back-end

- Main Framework: Express;
- Communication: Express(HTTP Server), SocketIO-server(WebSocket);

## And Finally... THE GAME!

The game proposal is to be a simple but yet fun dynamic fantasy RPG, in which the player can experience a grinding process while exploring new dungeons, facing new monsters, and cooperating with other players. The game allow you to play with different characters with different skill-sets, and gameplay styles.

It will be experienced on a 2D ambient, in key-based gameplay with programmed bot enemies.

A Demo version can be played at: https://falarya.boidacarapreta.cc/

Inspirations:
Realm of the mad god: https://store.steampowered.com/app/200210/Realm_of_the_Mad_God_Exalt/;
Dungeon Rampage: https://www.onrpg.com/games/dungeon-rampage/;
The Binding of Isaac: https://store.steampowered.com/app/113200/The_Binding_of_Isaac/;
