import { IUser } from './../../interfaces/User.interface';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  personList!: Observable<IUser[]>

  isLoading = true
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.personList = this.adminService.getPersonalList()
    this.personList.subscribe({
      next: value => this.isLoading = false
    })
  }

}
