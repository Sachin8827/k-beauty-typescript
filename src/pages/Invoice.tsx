import * as React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Cart, User } from "../Types/Types";
import { RootState } from "../Redux/Store";
import { calculatePrice } from "../components/common/CommanFunctions";
import GenerateInvoice from "../components/GenerateInvoice";
import logo from '/images/logo.png'
import "../assets/styles/Invoice.css";

const Invoice: React.FC<{ user: User }> = ({ user }) => {
  const { buyNowProduct } = useSelector((state: RootState) => state.user);
  const invoiceRef = useRef<HTMLDivElement>(null);
  let currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  let newDate = currentDate.toLocaleDateString();

  const downloadPDF = () => {
    ;
    // Fixed dimensions for the PDF
    const pdfWidth = 1024; // Fixed width
    const pdfHeight = 768; // Fixed height
    const input: HTMLElement | null = invoiceRef.current || document.querySelector('.dummy-invoice');


    html2canvas(input as HTMLElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a new jsPDF instance with landscape orientation and fixed dimensions
      const pdf = new jsPDF("landscape", "px", [pdfWidth, pdfHeight]);

      // Calculate the image height to maintain aspect ratio
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Check if the calculated height exceeds the fixed height
      let x = 0;
      let y = 0;
      let width = imgWidth;
      let height = imgHeight;

      if (imgHeight > pdfHeight) {
        height = pdfHeight;
        width = (canvas.width * height) / canvas.height;
        x = (pdfWidth - width) / 2; // Center horizontally
      } else {
        y = (pdfHeight - imgHeight) / 2; // Center vertically
      }

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, width, height);

      // Save the PDF
      pdf.save("invoice.pdf");
    }).catch(error => {
      console.error("Error generating PDF:", error);
    });
  };

  function RenderProductInvoice(item: Cart) {
    return `
    <tr>
      <td>${item.product.name}</td>
      <td>${item.product.price}</td>
      <td>${item.quantity}</td>
      <td>${item.quantity * item.product.price}</td>
    </tr>
  `;
  }
  function RenderCartInvoice(cart: Cart[]) {
    let html = '';
    cart.forEach(item => {
      html += `
      <tr>
        <td>${item.product.name}</td>
        <td>${item.product.price}</td>
        <td>${item.quantity}</td>
        <td>${item.quantity * item.product.price}</td>
      </tr>
    `;
    });
    return html;
  }

  const invoiceTemplate = `<style>
.dummy-invoice {
  width: 800px;
  height: max-content;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: var(--shadow-for-invoice);
  font-size: 16px;
  line-height: 24px;      
  color: #555;    
}

.dummy-invoice table {
    width: 100%;
    line-height: inherit;
    text-align: left;
    border-collapse: collapse;
}

.dummy-invoice table td, .dummy-invoice table th {
    padding: 5px;
    vertical-align: top;
}

.dummy-invoice table tr td:nth-child(2) {
    text-align: left;
}

.dummy-invoice table tr .header-row table td {
    border-bottom: 1px solid #555;
    padding-bottom: 20px;
}

.dummy-invoice table tr.company-info table td {
    padding-bottom: 40px;
}

.dummy-invoice table tr.payment-info-header td,
.dummy-invoice table tr.items-header td {
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
}

.dummy-invoice table tr.payment-info-details td {
    padding-bottom: 20px;
    border-bottom: 1px solid #555;
}

.dummy-invoice table tr.item td {
    border-bottom: 1px solid #eee;
}

.dummy-invoice table tr.item.last td {
    border-bottom: none;
}

.dummy-invoice table tr.total-row td:nth-child(2) {
    border-top: 2px solid #eee;
    font-weight: bold;
}
</style>

<table>
    <tr className="header-row">
        <td colSpan="4">
            <table>
                <tr style="border-bottom: 1px solid #555">
                    <td className="company-logo">
                        <img src="${logo}" alt="Company logo" style="width: 100%; max-width: 220px; image-rendering: pixelated;" />
                    </td>

                    <td style="text-align: right;">
                        Invoice #: 123<br />
                        Created: ${new Date().toLocaleDateString()}<br />
                        Due: ${newDate}
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <tr className="company-info">
        <td colSpan="4">
            <table>
                <tr style="border-bottom: 1px solid #555;">
                    <td>
                        ${user.street}<br />
                        ${user.city}<br />
                        Sunnyville, TX 12345
                    </td>

                    <td style="text-align: right;">
                        Acme Corp.<br />
                        ${user.firstName + " " + (user.lastName ? " " + user.lastName : "")}<br />
                        ${user.email}
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <tr className="payment-info-header">
        <th>Payment Method</th>
        <th colSpan="0">Check #</th>
        <th></th>
        <th></th>
    </tr>

    <tr className="payment-info-details" style="border-bottom : 1px solid #555;">
        <td>Dummy</td>
        <td>1000</td>
        <td></td>
        <td></td>
    </tr>

    <tr className="items-header">
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
    </tr>
    ${typeof buyNowProduct === 'object' ? (Object.keys(buyNowProduct).length ? RenderProductInvoice(buyNowProduct) : RenderCartInvoice(user.cart || [])) : RenderCartInvoice(user.cart || [])}

    <tr className="total-row">
        <td></td>
        <td></td>
        <td></td>
        <td>Total: ${typeof buyNowProduct === 'object' ? buyNowProduct.quantity * buyNowProduct.product.price : calculatePrice(user.cart || [])}</td>
    </tr>
</table>`;

  return (
    <>
      <section className='invoice'>
        <div className='invoice-box'>
          <GenerateInvoice user={user} />
        </div>
        <div style={{ position: 'absolute', top: '-10000px', left: '-10000px' }}>
          <div
            className='dummy-invoice'
            ref={invoiceRef}
            dangerouslySetInnerHTML={{ __html: invoiceTemplate }}
          ></div>
        </div>
      </section>
      <div className='downloadpdf'>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </>
  );
}


export default Invoice;
