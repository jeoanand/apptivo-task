import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

//Components
import { HeaderComponent } from '../components/header/header.component';
import { ContactInfoComponent } from '../components/contact-info/contact-info.component';
import { ContactStatsComponent } from '../components/contact-stats/contact-stats.component';
import { ContactActivitiesComponent } from '../components/contact-activities/contact-activities.component';
import { EmptyScreenComponent } from '../components/empty-screen/empty-screen.component';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    HeaderComponent,
    ContactInfoComponent,
    ContactStatsComponent,
    ContactActivitiesComponent,
    EmptyScreenComponent
  ],
})
export class ContactListComponent {
}
