import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardLibrosComponent } from './components/card-libros/card-libros.component';
import { CardTextoComponent } from './components/card-texto/card-texto.component';

export const routes: Routes = [
    {path:"", redirectTo:"header", pathMatch: "full"},
    {path: "header", component:HeaderComponent},
    {path: "footer", component:FooterComponent},
    {path: "card-libros", component:CardLibrosComponent},
    {path: "card-texto", component:CardTextoComponent},

];
