import { Injectable } from '@angular/core';
import { HousingLocation } from './housingLocation';
import housingListingsMock from './housingListingsMock';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = housingListingsMock

  constructor() { }

  getAllHousingLocations() : HousingLocation[] {
    return this.housingLocationList
  }

  getHousingLocationById(id: Number) : HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
