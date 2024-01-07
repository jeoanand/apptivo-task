import { Component, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-contact-activities',
  templateUrl: './contact-activities.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
  ],
})
export class ContactActivitiesComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
}
