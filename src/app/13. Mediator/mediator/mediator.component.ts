import { Component } from '@angular/core';
import { Mediator } from '../models/mediator.interface';
import { ChatRoom } from '../models/chat-room.mediator';
import { ChatUser } from '../models/chat-user.model';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.scss']
})
export class MediatorComponent {
  public sendToUser: ChatUser;
  public sendMessage: string;
  public answer: string;

  private readonly chatRoom: Mediator;

  private listUser: ChatUser[] = [];
  private admin: ChatUser;
  private user1: ChatUser;
  private user2: ChatUser;
  private user3: ChatUser;

  constructor() {
    this.answer = '';
    this.chatRoom = new ChatRoom();
    if (this.userFactory() === true) {
      this.addUserToChatRoom();
    }
  }

  public get userList(): ChatUser[] {
    return this.listUser;
  }

  public btnSend(): void {
    this.admin.send(this.sendMessage, this.sendToUser.id);
  }

  public btnAnswer(userId: number): void {
    this.chatRoom.getUserByID(userId).send(this.answer, userId);
  }

  private userFactory(): boolean {
    try {
      this.admin = new ChatUser(this.chatRoom, 0, 'Morpheus');
      this.user1 = new ChatUser(this.chatRoom, 1, 'John Doe');
      this.user2 = new ChatUser(this.chatRoom, 2, 'Lucky Luke');
      this.user3 = new ChatUser(this.chatRoom, 3, 'John Everyman');
      this.listUser = [this.user1, this.user2, this.user3];
      return true;
    } catch (e) {
      return false;
    }
  }

  private addUserToChatRoom() {
    this.listUser.forEach(user => {
      this.chatRoom.addUser(user);
    });
    this.chatRoom.addUser(this.admin);
  }
}
