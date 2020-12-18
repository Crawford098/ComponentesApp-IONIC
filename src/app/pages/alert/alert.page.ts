import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCntr: AlertController) { }

  ngOnInit() {
  }


  async onClick(){

    const alert = await this.alertCntr.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Alert is working',
      message: 'This is an alert message.',
      buttons: ['Got it ']
    });

    await alert.present();
  }


  async presentAlertMultipleButtons() {
    const alert = await this.alertCntr.create({
      cssClass: 'my-custom-class',
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Multiple Buttons',
      message: 'This is an alert message using multiple buttons.',
      buttons: [{
        text:'Got it',
        handler:()=>{
          console.log('Got it was Cliked')
        }

      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    });

    await alert.present();
  }






  async presentAlertPrompt() {
    const alert = await this.alertCntr.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2020-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
          min: '2017-03-01',
          max: '2020-01-12'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data:any) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

}
