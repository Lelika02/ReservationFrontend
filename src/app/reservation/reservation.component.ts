import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  date: Date | undefined;
  heure: string | undefined;

  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    // Créer un objet JSON représentant la réservation
  const reservation = {
    name: this.name,
    email: this.email,
    date: this.date,
    heure: this.heure
  };

  // Envoyer la réservation au backend
  this.http.post('/reservation', reservation).subscribe((response) => {
    // La réservation a été envoyée avec succès
  }, (error) => {
    // Une erreur s'est produite lors de l'envoi de la réservation
  });
  }

}
