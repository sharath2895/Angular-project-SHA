import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PunkService } from './shared/punk.service';
import { shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  radioItems: Array<string>;
  beerInfo$: Observable<any>;
  model = { option: "by name" };
  searchInput = "";
  displayAlco;
  displayAlcoList;
  beerInfo: any;

  constructor(private punkService: PunkService) {
    this.radioItems = ['by name', 'by Description'];
    this.beerInfo$ = this.punkService.getbeerInfo$().pipe(shareReplay(1));
  }
  private random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      let elem = document.getElementById("anotherBeer");
      elem.click();
      // let elemSearch = document.getElementById("search");
      // elemSearch.click();
    }, 500);
  }
  changeAlcoholic(beerInfo) {
    const randomNumber = this.random(Object.keys(beerInfo));
    this.displayAlco = beerInfo[randomNumber];
  }


  changeNonAlcoholic(beerInfo) {
    const beerInfoNon = beerInfo.filter(beer => beer.abv <= 0.05);
    const randomNumber = this.random(Object.keys(beerInfoNon));
    this.displayAlco = beerInfo[randomNumber];
  }

  search(beerInfo) {
    if (this.model.option === 'by name')
      this.displayAlcoList = beerInfo.filter(beer => beer.name.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1);
    else
      this.displayAlcoList = beerInfo.filter(beer => beer.description.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1);

  }
}
