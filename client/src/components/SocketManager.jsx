import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3001");
export const charactersAtom = atom([]);
export const chatListAtom = atom([]);

export const SocketManager = () => {
    const [characters, setCharacters] = useAtom(charactersAtom);
    const [chatList, setChatList] = useAtom(chatListAtom);
    useEffect(() => {
        function onConnect() {
            console.log("connected");
        }
        function onDisconnect() {
            console.log("disconnected");
        }

        function onHello() {
            console.log("hello");
        }

        function onCharacters(value) {
            setCharacters(value);
        }

        function onChatList(value) {
            setChatList(value);
        }
        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("hello", onHello);
        socket.on("characters", onCharacters);
        socket.on("chatList", onChatList);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("hello", onHello);
            socket.off("characters", onCharacters);
            socket.off("chatList", onChatList);
        };
    }, []);
};