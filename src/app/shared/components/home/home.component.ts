import { Component, OnDestroy, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSub !: Subscription
  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {
    this.intervalSub = this._ofService.of1$
      .subscribe(res =>{
        console.log(res);
      })
     // this._ofService.of1$.subscribe((res) => {
     //   console.log(res)
     // })
    this.intervalSub = this._ofService.of2$
      .subscribe(res1 =>{
         console.log(res1);
      })
  }

  ngOnDestroy() : void {
   this.intervalSub.unsubscribe()
  }

}
