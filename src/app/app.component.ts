import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingComponent } from "./listing/listing.component";
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListingComponent, FormsModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-and-sell';
}
