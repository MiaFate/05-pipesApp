import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'mia';
  public nameUpper: string = 'MIA';
  public fullName: string = 'mIa rAmOs';
  public customDate: Date = new Date();
}
