import io from 'socket.io-client';

export const socket = io("http://lum-web-socket.herokuapp.com", {
  "transports": ["polling","websocket"],
  "transportOptions": {
    "polling": {
        "extraHeaders": {}
    }
  }
});

export function socketLog(token: string) {
  return io("http://lum-web-socket.herokuapp.com", {
    "transports": ["polling","websocket"],
    "transportOptions": {
      "polling": {
          "extraHeaders": {
            "x-access-token": `Bearer ${token}`,
          }
      }
    }
  });
};