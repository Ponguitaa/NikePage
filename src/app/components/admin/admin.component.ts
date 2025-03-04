import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Necesario para el template

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]),
    desc: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });

  selectedImage: File | undefined;

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit() {
    if (this.productForm.invalid || !this.selectedImage) {
      console.error('Formulario inválido o imagen no seleccionada');
      return;
    }

    console.log('Producto listo para ser enviado:');
    console.log('Nombre:', this.productForm.get('name')?.value);
    console.log('Precio:', this.productForm.get('price')?.value);
    console.log('Descripción:', this.productForm.get('desc')?.value);
    console.log('Tipo:', this.productForm.get('type')?.value);
    console.log('Imagen:', this.selectedImage?.name);

    this.productForm.reset();
    this.selectedImage = undefined;
  }
}