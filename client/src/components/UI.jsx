import React, { useEffect, useRef, useMemo } from 'react'
import { useKeyboardControls } from "@react-three/drei";
import { useAtom } from "jotai";
import { charactersAtom, chatListAtom, socket } from "./SocketManager";
import dayjs from 'dayjs'
export default function UI() {
    const [sub, get] = useKeyboardControls()
    const inputValue = useRef('')
    const [chatList] = useAtom(chatListAtom);
    const [characters] = useAtom(charactersAtom);

    useEffect(() => {
        return sub(
            (state) => state.enter,
            (pressed) => {
                if (pressed && characters.length) {
                    const own = characters.find(item => item.id === socket.id)
                    console.log('own', characters, socket.id, own)
                    socket.emit("client-send-msg", {
                        fromUsername: own?.userData?.username,
                        timestamp: new Date().getTime(),
                        message: inputValue.current
                    })
                    inputValue.current = ''
                }
            }
        )
    }, [characters])


    return (
        <div className='chat'>
            <div className="chat-list">
                {
                    chatList.map((item, i) => {
                        return <div className='chat-item' key={i}>
                            [{dayjs(item.timestamp).format('YYYY-MM-DD HH-mm-ss')}]{item.fromUsername}: {item.message}
                        </div>
                    })
                }
            </div>
            <input type="text" value={inputValue.current} className="chat-input" placeholder='@所有人' onChange={e => {
                inputValue.current = e.target.value
            }} />
        </div>
    )
}