import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.css']
})
export class ListChatComponent implements OnInit {
  chats: any = [];
  codigoadmin = 2;
  admin: Admin = {
    id: 0,
    Name: '',
    LastName: '',
    Phone: '',
    Email: '',
    Password: '',
    Condition: '',
    ConditionMin: '',
    Photo: '',
    Code: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private chatService: ChatService,
  ) { }

  // tslint:disable-next-line: typedef
  getchats() {
    this.chatService.getChats().subscribe(
      res => {
        if (res) {
          this.chats = res;
          console.log(this.chats);
          this.toastr.info('lista de todos los chats');
        }
      }
    );
  }
  // tslint:disable-next-line: typedef
  select(param) {
    const codigo = param;
    this.router.navigate(
      [
        'admin',
        'chat',
        'answer',
        codigo
      ]
    );
  }

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('admin'));
    this.getchats();
  }

}
