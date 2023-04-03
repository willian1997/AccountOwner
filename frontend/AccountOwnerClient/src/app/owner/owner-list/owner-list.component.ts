import { Component, OnInit } from '@angular/core';
import { OwnerRepositoryService } from 'src/app/shared/services/owner-repository.service';
import { Owner } from 'src/app/_interfaces/owner.model';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit{
  owners: Owner[];

  constructor(private repo: OwnerRepositoryService) {}

  ngOnInit(): void {
    this.getAllOwner();
   
  }
  private getAllOwner = () => {
    const apiAdress : string = 'api/owner';
    this.repo.getOwners(apiAdress)
     .subscribe(own => {
       this.owners = own;
     })
  }
}
