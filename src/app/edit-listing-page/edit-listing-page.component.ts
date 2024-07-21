import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { Listing } from '../types';
const { fakeListings } = require('../fake-data.js');
const fakeMyListings: Listing[] = fakeListings;

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ListingDataFormComponent],
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  listing: Listing = { id: '', name: '', description: '', price: 0  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const foundListing = fakeMyListings.find(listing => listing.id === id);
    if (foundListing) {
      this.listing = foundListing;
    }
  }

  onSubmit(): void {
    alert('Saving current listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
