import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userData: any = JSON.parse(localStorage.getItem('userData') || '{}');
  editMode = false;

  onEdit(): void {
    this.editMode = true;
  }

  onSave(): void {
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.editMode = false;
  }
}
