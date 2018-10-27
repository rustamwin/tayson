import * as SocketIo from 'socket.io-client';
import ConnectOpts = SocketIOClient.ConnectOpts;

export function SocketClient(nsp?: string, options?: ConnectOpts) {
    return function (object, propKey) {
        object[propKey] = SocketIo(`http://localhost:3000${nsp}`, options);
    };
}

export function CurrentUser(): Function {
    return function (object, propKey) {
        const user = localStorage.getItem('__identity');
        object[propKey] = user ? JSON.parse(user) : user;
    };
}
