import { Component, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ],
})
export class ContactInfoComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
}

