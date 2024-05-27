import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-to-list',
  standalone: true,
  imports: [RouterLink, MatButton],
  templateUrl: './back-to-list.component.html',
  styleUrl: './back-to-list.component.scss'
})
export class BackToListComponent {

}
