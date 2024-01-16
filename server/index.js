import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

io.listen(3001);

const characters = [];

// 测试数据
const chatList = [{ timestamp: new Date().getTime(), message: 'Hello', fromUsername: 'xxxx' }, { timestamp: new Date().getTime(), message: 'Hello2222', fromUsername: 'xx22xx' }]

const generateRandomPosition = () => {
  return [Math.random() * 3, 0, Math.random() * 3];
};

const generateRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const generateRandomUserName = () => {
  return "player_" + Math.random().toString(36).substr(2, 10);
};

io.on("connection", (socket) => {
  console.log("user connected");
  const curCharacter = {
    id: socket.id,
    position: generateRandomPosition(),
    userData: {
      skinColor: generateRandomHexColor(),
      username: generateRandomUserName(),
    }
  }
  characters.push(curCharacter);

  socket.emit("hello");
  io.emit("chatList", chatList);
  io.emit("characters", characters);
  io.emit("socketId", socket.id);

  socket.on("move", (position) => {
    const character = characters.find(
      (character) => character.id === socket.id
    );
    character.position = position;
    io.emit("characters", characters);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");

    characters.splice(
      characters.findIndex((character) => character.id === socket.id),
      1
    );
    io.emit("characters", characters);
  });

  socket.on('client-send-msg', (chat) => {
    chatList.push(chat)
    console.log("client-send-msg", chatList);

    io.emit("chatList", chatList);
  })
})