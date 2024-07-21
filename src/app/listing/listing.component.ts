import { Component } from '@angular/core';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const { fakeListings } = require('../fake-data.js');

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  listings: Listing[] = fakeListings;
}
