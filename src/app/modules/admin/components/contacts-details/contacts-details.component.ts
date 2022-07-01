import { Observable, catchError, EMPTY, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/User.interface';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit, OnDestroy {

  user!: Observable<IUser>
  userSubscription!: Subscription
  id!: number;
  loader: boolean = true
  constructor(
    private router: Router,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.id = value?.['id']
    })
    this.user = this.adminService.getPerson(this.id)

    this.userSubscription = this.user.subscribe({
      next: value => {
        this.loader = false
      },
      error: err => {
        this.router.navigate(['admin/contacts'])
      }
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

}
