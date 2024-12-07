import { Component } from '@angular/core';
import {  MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component'; // Import RegisterComponent

@Component({
  selector: 'app-home',
  standalone: true, // Mark this component as standalone
  imports: [CommonModule, FormsModule, MatDialogModule], // Import necessary modules
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}