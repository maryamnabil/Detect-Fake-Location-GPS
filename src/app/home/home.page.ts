import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  FakeLocation(){
    ( window as any).plugins.mockgpschecker.check((a) => alert(a.isMock), (b) => console.log(b));
  }


}
