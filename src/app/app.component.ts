import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

declare const require: any;
declare const $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  numberFormat = '';

  ngOnInit(): void {
    console.log(formatedNumber(12121212));

    $('input').on( 'keyup', function() {
      if( this.value ) {
        this.setAttribute( 'value', this.value );
      } else {
        this.removeAttribute( 'value' );
      }
    });
  }

  format(){
    formatedNumber(this.numberFormat);
    console.log(formatedNumber(this.numberFormat));

    this.numberFormat = formatedNumber(this.numberFormat);

  }
}

function convertNumber(num){
  return new Intl.NumberFormat().format(Math.round(num*10)/10);
}

function formatedNumber(num){
  if(num >= 1000000)
    return convertNumber(num/1000000)+'M';
  if(num >= 1000)
    return convertNumber(num/1000)+'k';
    return convertNumber(num);
}
