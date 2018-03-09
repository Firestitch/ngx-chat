import { Component, Input, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { FsArray } from '@firestitch/common';

export interface FsChatUser {
  value: number;
  name: string;
  email: string;
  avatar: string;
}

@Component({
    selector: 'fs-participants',
    templateUrl: './fsparticipants.component.html',
    styleUrls: ['./fsparticipants.component.scss'],
})
export class FsParticipantsComponent implements OnInit {

  @ViewChild('input') input;

  user: FsChatUser = null;
  users: FsChatUser[] = [];
  usersChange$: Subscriber<string|object>;
  @Output() onChange = new EventEmitter<FsChatUser[]>();

  list: FsChatUser[] = [
    { name: 'Bob', value: 1, email: 'test@gmail.com', avatar: '/assets/user-avatar.jpg' },
    { name: 'Ryan', value: 2, email: 'test@gmail.com', avatar: '/assets/user-avatar.jpg' },
    { name: 'Jane', value: 3, email: 'test@gmail.com', avatar: '/assets/user-avatar.jpg' },
    { name: 'Dave', value: 4, email: 'test@gmail.com', avatar: '/assets/user-avatar.jpg' }
  ];

  filteredOptions: Observable<FsChatUser[]>;

  constructor(private FsArray: FsArray) { }

  ngOnInit() {
    this.filteredOptions = this.input.valueChanges
      .map(data => data && typeof data === 'object' ? data.name : data)
      .map(name => this.filter(name));
  }

  filter(name: string) {
    let data = name ? this.list.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0) : this.list.slice();

    const selectedUsersIds: number[] = (<number[]>this.FsArray.list(this.users, 'value'));

    return this.FsArray.filter(data, (user) => {
      return selectedUsersIds.indexOf(user.value) === -1;
    });
  }

  displayFn(data): string {
    return data ? data.name : data;
  }

  add(data) {
    if (data && typeof data === 'object') {
      this.users.push(data);
      this.user = null;
    }
  }

  remove(value) {
    this.FsArray.remove(this.users, { value });
  }

  save(users) {
    this.onChange.emit(users);
  }
}
