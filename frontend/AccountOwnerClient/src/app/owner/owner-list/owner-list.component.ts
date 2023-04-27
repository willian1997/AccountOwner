import { Component, OnInit } from '@angular/core';
import { OwnerRepositoryService } from 'src/app/shared/services/owner-repository.service';
import { Owner } from 'src/app/_interfaces/owner.model';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[];
  errorMessage: string = '';

  constructor(private repo: OwnerRepositoryService, private errorHandler: ErrorHandlerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllOwner();

  }
  private getAllOwner = () => {
    const apiAdress: string = 'api/owner';
    this.repo.getOwners(apiAdress)
      .subscribe({
        next: (own: Owner[]) => this.owners = own,
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
  }
  public getOwnerDetails = (id) => {
    const detailsUrl: string = `/owner/details/${id}`;
    this.router.navigate([detailsUrl]);
  }

  public redirectToUpdatePage = (id) => {
    const updateUrl: string = `/owner/update/${id}`;
    this.router.navigate([updateUrl]);
  }

  public redirectToDeletePage = (id) => {
    const deleteUrl: string = `/owner/delete/${id}`;
    this.router.navigate([deleteUrl]);
  }

}
