import { Component } from '@angular/core';
import { CompanyDetails } from 'src/app/shared/mock-data';

@Component({
  selector: 'app-activity-two',
  templateUrl: './activity-two.component.html',
  styleUrls: ['./activity-two.component.css']
})
export class ActivityTwoComponent {
  data = CompanyDetails;
  suburb: string = '';
  asxListed: boolean = false;
  codeSnippet: string;

  constructor() {
    this.codeSnippet = `
      function getValue(path, obj) {
        const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
        return value;
      }
      const suburb = this.getValue('address.office.suburb', object);
      const asxListed = this.getValue('industry.asxListed', object);
      `
  }

  ngOnInit(): void {
    this.suburb = this.getValue('address.office.suburb', this.data);
    this.asxListed = this.getValue('industry.asxListed', this.data);
  }

  // Activity2 - to retrieve values for the following properties: suburb, asxListed
  getValue(path: string, obj: any): any {
    const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
    console.log(path, value);
    return value;

    // const splitVal = path.split('.');
    // return splitVal.reduce(function(obj, part) {
    //   debugger;
    //   return obj && obj[part];
    // }, obj);
  }

}
