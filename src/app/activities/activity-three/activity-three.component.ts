import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-activity-three',
  templateUrl: './activity-three.component.html',
  styleUrls: ['./activity-three.component.css']
})
export class ActivityThreeComponent {
  locations: any[] = [];
  error: string | null = null;
  apiUrl: string = 'https://api.megaport.com/v2/locations';
  loading: boolean = false;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.fetchLocations();
  }

  fetchLocations(): void {
    this.loading = true;
    this.locationService.getLocations(this.apiUrl).subscribe(
      {
        next: (res: any) => {
          this.locations = res.data;
          this.loading = false;

        },
        error: (err: any) => {
          this.error = err.message
          this.loading = false;
        }
      }
    );
  }
}
