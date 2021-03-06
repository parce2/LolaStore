import { CalificarComponent } from './calificar/calificar.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'
import { TagsComponent } from './tags/tags.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { AddCarComponent } from './add-car/add-car.component';

const components = [
	TagsComponent,
	DireccionesComponent,
	DescuentosComponent,
	TarjetasComponent,
	ConfirmacionComponent,
	FavoritoComponent,
	CalificarComponent,
	AddCarComponent
];

@NgModule({
	declarations: components,
	imports: [
		CommonModule,
		RouterModule,
		IonicModule,
		FormsModule
	],
	exports: [components]
})
export class ComponentsModule { }
