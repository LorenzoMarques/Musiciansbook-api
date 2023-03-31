import app from "./app";
import { AppDataSource } from "./data-source";
import { Server } from "socket.io";
import { ISocketUsers } from "./interfaces/chat.interfaces";

const port = 3001;

const server = app.listen(process.env.PORT || port, () => {
  console.log(`App rodando na porta ${process.env.PORT || port}`);
});

const io = new Server(server, {
  cors: {
    origin: "https://musicians-book.vercel.app",
    credentials: true,
  },
});

let users: Array<ISocketUsers> = [];

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    const user = users.find((user) => user.userId === data.to);
    if (user) {
      socket.to(user?.socketId).emit("private_message", {
        text: data.text,
        from: data.from,
        to: data.to,
        id: data.id,
      });
    }
  });

  socket.on("newUser", (data) => {
    users.push({ userId: data, socketId: socket.id });
    io.emit("newUserResponse", users);
  });

  socket.on("leave", (data) => {
    users = users.filter((user) => user.userId !== data);
    io.emit("newUserResponse", users);
  });
});

AppDataSource.initialize()
  .then(() => console.log("Data source initialized!"))
  .catch((err) =>
    console.error("Error during data source initialization!", err)
  );
