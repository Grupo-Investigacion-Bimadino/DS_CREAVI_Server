// generate intercase for User and Rooms

// Path: src/socket-io/chat.interfaces.ts
export interface User {
  id: string;
  name: string;
}

export interface Room {
  id: string;
  name: string;
  users: User[];
}
