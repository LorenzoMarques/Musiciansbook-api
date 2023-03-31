import express from "express";
import routerUsers from "./routes/users.routes";
import routerImages from "./routes/images.routes";
import routerSongs from "./routes/songs.routes";
import routerFollow from "./routes/follow.routes";
import routerFeed from "./routes/feed.routes";
import routerChats from "./routes/chat.routes";

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use("/load/images", express.static("src/images"));
app.use("/load/songs", express.static("src/songs"));
app.use(routerUsers);
app.use(routerImages);
app.use(routerSongs);
app.use(routerFollow);
app.use(routerFeed);
app.use(routerChats);

export default app;
