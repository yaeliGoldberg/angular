import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-gmail',
  imports: [ NgClass, NgFor, NgIf, NgStyle,FormsModule],
  templateUrl: './gmail.html',
  styleUrl: './gmail.css',
})
export class Gmail {
  Hebrew=['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת']
  English=['t','c','d','s','v','u','z','j','y','h','f','k','n','b','x','g','p','m','e','r','a',',']

show = false;
email='';
title='';
look() {
  this.show = true;
}
hide() {
  this.show = false;
}
check(event:KeyboardEvent){

   const key = event.key;
  if (key.length !== 1) {
        return
  }
 event.preventDefault();
  let charToAdd = key;
  const index = this.Hebrew.indexOf(key);

  if (index != -1) {
    charToAdd = this.English[index];
  }

  this.email = this.email+charToAdd;

}
changeTaitle()
{
  this.title="כתובת המייל שנקלטה היא   "+this.email;
}
add()
{
  this.email+="@gmail.com"
    this.title="כתובת המייל שנקלטה היא   "+this.email;
}
}
