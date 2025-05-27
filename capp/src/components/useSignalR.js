import { useEffect, useRef } from 'react';
import * as signalR from '@microsoft/signalr';

export const useSignalR = (onMessageReceived, userId) => {
  const connectionRef = useRef(null);

  useEffect(() => {
    if (!userId) return;

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/chathub", { // adjust port and path
        accessTokenFactory: () => localStorage.getItem("token") || ""
      })
      .withAutomaticReconnect()
      .build();

    connectionRef.current = connection;

    connection.start()
      .then(() => {
        console.log("SignalR Connected");
        connection.invoke("AddUserToGroup", userId.toString()); // Optional: implement this server-side
      })
      .catch(err => console.error("SignalR Connection Error: ", err));

    connection.on("ReceiveMessage", (message) => {
      console.log("Message received: ", message);
      onMessageReceived(message); // Call the provided callback
    });

    return () => {
      connection.stop();
    };
  }, [userId]);
};
