import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-saved-movies',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './saved-movies.component.html',
  styleUrl: './saved-movies.component.css'
})
export class SavedMoviesComponent {

}
