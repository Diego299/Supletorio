import { StackNavigationProp } from '@react-navigation/stack';

export type PilaParamList = {
  PantallaBienvenida: undefined;
  PantallaFormulario: undefined;
  PantallaResultado: { nombre: string; correo: string; comentario: string };
  PantallaExtra: undefined; // Puedes agregar más pantallas aquí
};

export type NavegaciónPantallaProp = StackNavigationProp<PilaParamList>;
