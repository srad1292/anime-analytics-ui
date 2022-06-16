import { Injectable } from '@angular/core';

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

@Injectable({
  providedIn: 'root'
})
export class ExportPageService {

  constructor () {}

  public downloadPdf(elementId: String, fileName: String): void {
    html2canvas(document.querySelector(`#${elementId}`))
    .then(function (canvas) {
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); 
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 20, position, imgWidth, imgHeight);
      pdf.save(`${fileName}.pdf`); 
    });
  }

  public downloadPng(elementId: String, fileName: String): void {
    html2canvas(document.querySelector(`#${elementId}`))
    .then(function (canvas) {
        canvas.toBlob(function(blob){
            let link = document.createElement("a");
            link.download = `${fileName}.png`;
            link.href = URL.createObjectURL(blob);
            link.click();
        },'image/png'); 
    });
  }
}
