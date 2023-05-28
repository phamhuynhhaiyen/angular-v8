import { Component } from '@angular/core';
@Component({
  template: `
          <h3>Example of Directive composition API</h3>
          <p appHighlight>Paragraph with a highlight directive</p>
          <p appBorder>Paragraph with a border directive</p>
          <p appBorder appHighlight>Paragraph with a highlight and border directive</p>

  `,
})
export class AddressComponent {}
